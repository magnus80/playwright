const { test, expect } = require('@playwright/test');

test('Проверяем, что у поля Откуда выпадает подсказка', async ({ page }) => {
    await page.goto('https://www.rzd.ru');

    await page.locator("#direction-form").fill("Москва");
    await expect(page.locator(".rzd-suggestion-block").first()).toBeVisible();
});