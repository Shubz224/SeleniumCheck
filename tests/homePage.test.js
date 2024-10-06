const { Builder, By, until } = require('selenium-webdriver');

describe('Home Page Tests', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000'); // Adjust the URL as necessary
  });

  afterAll(async () => {
    await driver.quit();
  });

  test('should display blog titles on the home page', async () => {
    try {
      const blogTitles = await driver.findElements(By.css('h2.blog-title'));
      const expectedTitles = [
        'The Future of AI: Opportunities and Challenges',
        '10 Tips to Improve Your Productivity',
        'A Beginner Guide to Blockchain Technology',
        'Healthy Eating: Myths vs. Facts',
        'Top 5 Destinations for Digital Nomads in 2024',
      ];

      for (let i = 0; i < blogTitles.length; i++) {
        const titleText = await blogTitles[i].getText();
        expect(titleText).toBe(expectedTitles[i]);
      }
    } catch (error) {
      let screenshot = await driver.takeScreenshot();
      // Handle error logging or screenshot saving here
      throw error; // Re-throw error after logging
    }
  });
});
