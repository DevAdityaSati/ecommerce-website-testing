
import { test, expect } from '@playwright/test';

const USERNAME = 'standard_user';
const PASSWORD = 'secret_sauce';

async function login(
  page: import('@playwright/test').Page,
  username = USERNAME,
  password = PASSWORD
) {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();
}

test.describe('SauceDemo login', () => {
  test('LOGIN-001: user can log in with valid credentials', async ({ page }) => {
    await login(page);

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  });

  test('LOGIN-002: invalid password is rejected', async ({ page }) => {
    await login(page, USERNAME, 'incorrect_password');

    await expect(page).toHaveURL(/saucedemo\.com\/?$/);
    await expect(page.locator('[data-test="error"]')).toContainText(
      'Username and password do not match'
    );
  });

  test('LOGIN-004: empty credentials show username-required error', async ({
    page,
  }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText(
      'Username is required'
    );
  });

  test('LOGIN-007: locked-out user cannot log in', async ({ page }) => {
    await login(page, 'locked_out_user', PASSWORD);

    await expect(page.locator('[data-test="error"]')).toContainText(
      'Sorry, this user has been locked out'
    );
  });
});

test.describe('SauceDemo cart and checkout', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
    await expect(page).toHaveURL(/inventory\.html/);
  });

  test('CART-002: user can add one product to cart', async ({ page }) => {
    await page
      .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();

    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText(
      '1'
    );

    await page.locator('[data-test="shopping-cart-link"]').click();

    await expect(
      page.locator('[data-test="inventory-item-name"]')
    ).toHaveText('Sauce Labs Backpack');
  });

  test('INFO-003: empty checkout form shows validation error', async ({
    page,
  }) => {
    await page
      .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();

    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="continue"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText(
      'First Name is required'
    );
  });

  test('COMPLETE-001: standard user can complete checkout', async ({
    page,
  }) => {
    await page
      .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();

    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText(
      '1'
    );

    await page.locator('[data-test="shopping-cart-link"]').click();

    await expect(
      page.locator('[data-test="inventory-item-name"]')
    ).toHaveText('Sauce Labs Backpack');

    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').fill('Andrew');
    await page.locator('[data-test="lastName"]').fill('Thomas');
    await page.locator('[data-test="postalCode"]').fill('560001');
    await page.locator('[data-test="continue"]').click();

    await expect(page).toHaveURL(/checkout-step-two\.html/);

    await expect(
      page.locator('[data-test="inventory-item-name"]')
    ).toHaveText('Sauce Labs Backpack');

    await page.locator('[data-test="finish"]').click();

    await expect(page).toHaveURL(/checkout-complete\.html/);
    await expect(page.locator('[data-test="complete-header"]')).toHaveText(
      'Thank you for your order!'
    );

    await expect(
      page.locator('[data-test="shopping-cart-badge"]')
    ).toHaveCount(0);
  });
});