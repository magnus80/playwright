import {expect, test} from "@playwright/test";

test("Поиск по сайту (пустая выдача)", async ({ page }) => {
    // открыть страницу https://www.labirint.ru
    await page.goto("https://www.labirint.ru");
    // принять политику куки
    await page.locator(".cookie-policy button").click();
    // ввести в строку поиска javascript
    await page.locator("#search-field").fill("Эйяфьядлайёкюдль");
    // нажать кнопку Enter
    await page.locator("#search-field").press("Enter");
    // запомнили первую карточку товара
    await expect(page.locator("h1").first()).toHaveText("Мы ничего не нашли по вашему запросу! Что делать?")
    await page.goto("https://www.labirint.ru/cart");
    await expect(page.locator("#basket-step1-default .g-alttext-small.g-alttext-grey.g-alttext-head").first()).toHaveText("ВАША КОРЗИНА ПУСТА. ПОЧЕМУ?", {ignoreCase: true})
});