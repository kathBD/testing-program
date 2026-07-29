import { test, expect } from '@playwright/test';

test('playwright exercise', async ({ page }) => {

    //open the shop page
await page.goto('https://automationexercise.com/');

  // Verificar productos visibles
  await expect(
    page.getByRole('heading', { name: 'Features Items' })
  ).toBeVisible();

  // Entrar al primer producto
  await page.getByRole('link', { name: 'View Product' })
    .first()
    .click();

  // Cambiar cantidad
  await page.locator('#quantity').fill('3');

  await expect(page.locator('#quantity'))
    .toHaveValue('3');

  // Añadir carrito
  await page.getByRole('button', { name: 'Add to cart' })
    .click();

  // Validar mensaje
  await expect(
    page.getByRole('heading', { name: 'Added!' })
  ).toBeVisible();

  // Cerrar modal
  await page.getByRole('button', { name:'Continue Shopping'})
    .click();

  // Validar que desapareció
  await expect(
    page.getByRole('heading', { name:'Added!' })
  ).not.toBeVisible();

});
