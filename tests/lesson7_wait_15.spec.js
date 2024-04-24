import { test, expect } from '@playwright/test';

test('Проверяем пустой результат поиска на сайте', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/');

    await page.locator(".DocSearch-Button-Placeholder").first().click()
    await page.locator("#docsearch-input").fill("playwright")

    await expect(page.locator(".DocSearch-Title")).toHaveText('No results for "playwright" :(');
});