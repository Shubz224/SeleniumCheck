const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');

jest.setTimeout(30000); // 30 seconds

describe('Form Page Tests', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test('should submit a new blog post', async () => {
    try {
      await driver.get('http://localhost:3000/form');

      const titleInput = await driver.wait(until.elementLocated(By.name('title')), 10000);

      // Take a screenshot for debugging
      let screenshot = await driver.takeScreenshot();
      fs.writeFileSync(path.join(__dirname, 'formpage_debug.png'), screenshot, 'base64');

      await titleInput.sendKeys('New Blog Post');
      const submitButton = await driver.wait(until.elementLocated(By.css('button[type="submit"]')), 10000);
      await submitButton.click();

      // Add further assertions based on your form behavior
    } catch (error) {
      // Take screenshot on error
      let screenshot = await driver.takeScreenshot();
      fs.writeFileSync(path.join(__dirname, 'formpage_error.png'), screenshot, 'base64');
      throw error;
    }
  });
});
