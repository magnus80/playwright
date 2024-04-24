import { test, expect } from '@playwright/test';

test('url and title', async ({ page }) => {
    await page.goto('https://sky-todo-list.herokuapp.com/', { waitUntil: "networkidle" });

    // >>>>> дополнить код здесь
    const count = await page.locator("tr>td").count();

    console.log(count);

    // <<<<<

});