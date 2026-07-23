import { test, expect } from '@playwright/test';

test('validar botones', async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/');
  await page.getByRole('link', { name: 'Resources' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Click', exact: true }).click();
  await page.getByRole('button', { name: 'Button That Ignores DOM Click' }).click();
});