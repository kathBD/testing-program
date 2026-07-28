import { test, expect } from '@playwright/test';

test('playwright assertions', async ({ page }) => {

  await page.goto('http://uitestingplayground.com/textinput');

  //make sure inputt is visible
   await expect(page.locator('#newButtonName')).toBeVisible();
  //select input and fill the input with text
  await page.locator('#newButtonName').fill('Tsuki');
  //  VERIFY BUTTON click
  await page.locator('#updatingButton').click();
  //verify button text updated
  await expect(page.locator('#updatingButton')).toHaveText('Tsuki');//texto coincide con el del campo
 
  await expect(page.locator('#updatingButton')).toContainText('Tsuki');// puede decir Hola Tsuki y pasar porque es parcial


  });
 
