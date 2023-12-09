import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page.getByTestId('header')).toHaveText(/Actions POC/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  console.log('starting click test');
  // Click the counter button.
  await page.getByTestId('counter-button').click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('counter-button')).toContainText('1');

  console.log('click test complete');
});
