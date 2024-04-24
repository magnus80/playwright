import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/sampleapp');

    const login = 'User';
    
    await page.locator("input[type='text']").fill(login);
    await page.locator("input[type='password']").fill("pwd");
    await page.locator("#login").click();

});