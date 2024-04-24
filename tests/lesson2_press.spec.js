import { test, expect } from '@playwright/test';

test('zoom page', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/textinput');
    await page.locator("#newButtonName").fill("Abc")

    // >>>>> дополнить код здесь
    await page.locator("#newButtonName");


    

    // <<<<<

    await page.locator("#updatingButton").click()
    await expect(page.locator("#updatingButton")).toHaveText("AbcAbcAbc")

});