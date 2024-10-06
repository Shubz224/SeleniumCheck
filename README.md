# **SeleniumCheck: Blog Frontend Testing with Selenium** ![Intro Image](./assets//Screenshot%20(115).png)

### **About**
**SeleniumCheck** is a blog-based frontend testing project that focuses on automating UI tests using **Selenium WebDriver**. This project ensures that key elements such as blog titles, forms, and links work seamlessly across different browsers. The tests guarantee that the blog functionality, including listing blog posts and creating new entries, is robust, ensuring an optimal user experience.

### **How It Works**
The project uses **Selenium WebDriver** to automate the interaction with the blog's UI. The following steps are followed during testing:
1. **Launch Blog Application**: Selenium opens the browser and navigates to the homepage of the blog.
2. **Verify Blog Titles**: Selenium checks that the correct blog titles are displayed on the homepage by fetching the content and validating it against expected values.
3. **Form Submission**: The form submission process is tested by automating input into the blog title and content fields and then submitting the form.
4. **Navigation Testing**: The "Read More" links are verified to ensure they correctly navigate to the blog details page.

Each test case is thoroughly designed to catch issues in the early stages and improve the quality of the blog's frontend.

### **Features**
- **Automated UI Testing**: Test the frontend components of the blog such as blog cards, titles, and form inputs using Selenium.
- **Cross-Browser Compatibility**: Selenium is configured to run tests across multiple browsers (Chrome, Firefox, etc.).
- **Responsive Blog Layout**: The blog features a grid layout that adjusts to various screen sizes and is visually appealing.
- **Form Validation**: Tests ensure that form fields are validated correctly when users try to submit new blogs.
- **End-to-End Testing**: From loading the homepage to submitting forms and navigating between pages, the test cases cover the complete flow.

### **Difficult Part: New to Test Cases**
One of the challenges in this project was designing effective test cases for the frontend UI. Since testing user interfaces requires understanding how elements behave dynamically, ensuring that the tests cover real-world scenarios like form validation, page navigation, and content display is crucial. We overcame this by leveraging Selenium’s powerful automation tools, which allowed us to simulate real user interactions and verify results automatically.

### **Snapshots**
#### 1. ** Test Snapshot**
![Homepage Test](./assets//Screenshot%20(117).png)

#### 2. **Form Submission Test Snapshot**
![Form Submission Test](./assets//Screenshot%20(117).png)

### **Technologies Used**
- **React**: The frontend framework used to build the blog application.
- **Selenium WebDriver**: Used for automating browser interactions and performing UI tests.
- **Jest**: Used for writing and running JavaScript test cases.
- **SCSS**: The styling language used for designing the layout and UI elements of the blog.

### **Done at the Time of Making**
- **Selenium Setup**: Selenium WebDriver was set up for both Chrome and Firefox browsers.
- **Test Case Development**: Wrote multiple test cases to check the correct functionality of the blog, including homepage blog title checks and form submission.
- **Form Handling**: Automated tests were built to handle form validation and submission, ensuring user input is correctly processed.
- **Error Handling**: Implemented error handling to catch any issues during the test runs, ensuring a smooth test process.

### **Test Cases in the Frontend**
- **Blog Title Check**: Ensures the correct blog titles are displayed on the homepage.
- **Form Submission Test**: Verifies that new blogs can be created by filling out the form and submitting it.
- **Link Navigation Test**: Checks that the "Read More" links correctly navigate to the respective blog details page.
- **Responsive Design Test**: Ensures that the layout is responsive and adjusts well across different devices and screen sizes.


