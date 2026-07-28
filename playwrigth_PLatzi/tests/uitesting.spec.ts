import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/');
  await page.getByRole('heading', { name: 'UI Test Automation Playground' }).click();
  await page.getByRole('link', { name: 'Class Attribute' }).click();
  await page.getByRole('button', { name: 'Button' }).nth(2).click();
  await page.getByRole('button', { name: 'Button' }).first().click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Button' }).nth(1).click();
  await page.goto('http://www.uitestingplayground.com/');
  await page.getByRole('link', { name: 'Click', exact: true }).click();
  await page.getByRole('button', { name: 'Button That Ignores DOM Click' }).click();
  await page.getByRole('button', { name: 'Button That Ignores DOM Click' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Text Input' }).click();
  await page.getByRole('textbox', { name: 'Set New Button Name' }).click();
  await page.getByRole('textbox', { name: 'Set New Button Name' }).fill('hola');
  await page.getByRole('button', { name: 'Button That Should Change it\'' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
});