import { test, expect } from '@playwright/test';

test('url and title', async ({ page }) => {
    await page.goto('https://www.ebay.com/sch/i.html?_nkw=nike&_ipg=120');

    // >>>>> дополнить код здесь
    await expect(page.locator(".s-item__wrapper.clearfix")).toHaveCount(120);

   

    // <<<<<

});

test('url and title 1', async ({ page }) => {
    await page.goto('https://www.ebay.com/sch/i.html?_nkw=nike&_ipg=240');

    // >>>>> дополнить код здесь
    await expect(page.locator(".s-item__wrapper.clearfix")).toHaveCount(241);


});