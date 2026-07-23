import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://es.pinterest.com/');
  await page.getByRole('button', { name: 'Aceptar todas' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Empresas ; Abre una nueva' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Toggle search' }).click();
  await page1.locator('[data-test-id="V2FieldStatusInput-search"]').fill('runas');
  await page1.locator('[data-test-id="V2FieldStatusInput-search"]').press('Enter');
  await page1.getByText('Resultados de la búsqueda de').click();
  await page.locator('[data-test-id="search-box-input"]').click();
  await page.getByRole('button', { name: 'Cerrar' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Noticias ; Abre una nueva' }).click();
  const page2 = await page2Promise;
  await page2.getByRole('link', { name: 'Collage de moda en tonos pú' }).click();
});
