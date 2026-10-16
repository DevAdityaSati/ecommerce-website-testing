# 🛒 E-commerce Website Testing with Playwright & Claude

An e-commerce website testing project built using **Playwright** with assistance from **Claude AI** to develop and organize automated tests for website functionality, user interactions, navigation, shopping cart operations, and checkout workflows.

## 🚀 Project Overview

E-commerce websites contain multiple user journeys that need to work correctly, from browsing products to adding items to a cart and completing the checkout process.

This project explores browser automation using Playwright to test key e-commerce functionalities. Claude AI was used as a development assistant to help write, understand, and improve test scripts.

The objective is to make website testing more efficient, repeatable, and easier to maintain.

## ✨ Features

- **Browser Automation:** Automates browser interactions using Playwright.
- **Navigation Testing:** Tests website navigation and page accessibility.
- **Product Page Testing:** Checks product details and page interactions.
- **Shopping Cart Testing:** Tests adding, removing, and updating cart items.
- **Checkout Workflow Testing:** Tests checkout steps and form interactions where supported.
- **Functional Testing:** Validates important user journeys.
- **Claude AI Assistance:** Uses Claude to assist with test development, debugging, and improving test coverage.
- **Repeatable Tests:** Allows automated test cases to be executed repeatedly.

*The exact features covered depend on the test scripts implemented in this repository.*

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Playwright | Browser automation and end-to-end testing |
| JavaScript / TypeScript | Test scripting, depending on project configuration |
| Node.js | JavaScript runtime |
| Claude AI | Assistance with writing, understanding, and debugging tests |
| Git and GitHub | Version control and project hosting |

## 📂 Project Structure

A typical Playwright project may use the following structure:

```text
ecommerce-website-testing-playwright/
├── tests/
│   └── ecommerce.spec.js
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

*Adjust this structure to match the files actually present in your repository.*

## ⚙️ Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- npm package manager
- Git installed
- An e-commerce website or test environment to run the tests against

### Step 1: Clone the Repository

```bash
git clone https://github.com/DevAdityaSati/ecommerce-website-testing-playwright.git
```

Navigate to the project directory:

```bash
cd ecommerce-website-testing-playwright
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Install Playwright Browsers

```bash
npx playwright install
```

### Step 4: Run the Tests

Run all configured Playwright tests:

```bash
npx playwright test
```

Run tests with a visible browser:

```bash
npx playwright test --headed
```

Run tests with the Playwright UI:

```bash
npx playwright test --ui
```

### Step 5: View the Test Report

After the test run, generate or open the HTML report:

```bash
npx playwright show-report
```

These commands assume your repository has a compatible Playwright configuration and test scripts.

## 🧪 Testing Scenarios

The project can cover the following e-commerce user journeys:

| Test Scenario | Objective |
|---|---|
| Website Navigation | Verify important pages and navigation links |
| Product Details | Check product information and page behavior |
| Add to Cart | Verify that products can be added to the shopping cart |
| Update Cart | Test quantity changes and item removal |
| Checkout | Validate checkout forms and workflow behavior |
| Form Validation | Check required fields and invalid input handling |
| Error Handling | Identify unexpected behavior during user interactions |

Only scenarios implemented in your test scripts should be considered completed.

## 🔍 Example Playwright Test

The following is a basic example of a browser test. Replace the example URL and selectors with those used by your target website.

```javascript
const { test, expect } = require('@playwright/test');

test('E-commerce homepage loads successfully', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example Domain/);
});
```

This test opens a webpage and verifies that its title matches the expected text.

## 🤖 How Claude AI Was Used

Claude AI can assist during test development by helping to:

- Generate Playwright test scripts from test scenarios.
- Explain browser automation commands.
- Debug failing tests and suggest possible fixes.
- Improve test readability and maintainability.
- Identify additional test cases for important user journeys.

Claude is used as a development assistant; Playwright performs the browser automation.

## 📊 Expected Benefits

- Reduced repetitive manual testing.
- Faster execution of repeatable test scenarios.
- More consistent validation of user journeys.
- Easier identification of functional regressions.
- Improved understanding of end-to-end browser testing.

Actual results depend on the implemented test suite and the website being tested.

## 🔮 Future Improvements

- Add automated login and logout tests.
- Expand product search and filtering tests.
- Implement data-driven testing.
- Add screenshots and video recording for failures.
- Integrate tests into a GitHub Actions CI/CD workflow.
- Add cross-browser testing for Chromium, Firefox, and WebKit.
- Generate detailed test reports for each execution.

## 👨‍💻 Author

**Devaaditya Sati**

- GitHub: [@DevAdityaSati](https://github.com/DevAdityaSati)
- Profile: https://github.com/DevAdityaSati

## 📄 License

Add a `LICENSE` file if you intend to specify permissions for using, modifying, or distributing this project.
