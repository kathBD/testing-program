import { test, expect } from '@playwright/test';

test('playwright exercise', async ({ page }) => {

    await page.goto('https://automationexercise.com/');

    // Ir directamente al primer producto
    await page.goto('https://automationexercise.com/product_details/1');

    // Validar página de detalle
    await expect(page).toHaveURL(/product_details\/1/);

    // Cambiar cantidad
    await page.locator('#quantity').fill('2');

    // Añadir al carrito
    await page.getByText('Add to cart').click();

    // Validar mensaje
    await expect(page.locator('.modal-content'))
        .toContainText('Your product has been added to cart');

    // Ir al carrito
    await page.getByText('View Cart').click();

    // Validar carrito
    await expect(page).toHaveURL(/view_cart/);
    await expect(page.locator('.cart_info')).toBeVisible();

});