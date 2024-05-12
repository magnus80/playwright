import {expect, Page, test} from "@playwright/test";
import {MainPage} from "../pages/mainPage";
// импортнули наш класс
import {ResultPage} from "../pages/resultPage";


test("Поиск по сайту", async ({page}) => {
    const mainPage = new MainPage(page);
    const resultPage = new ResultPage(page)

    await mainPage.openPage();
    await mainPage.searchFor("Javascript");

    const priceToBe = await resultPage.getPriceForItem(0);
    await resultPage.addItemToCart(0)

    // оставляем, как есть
    await openCart(page)
    await expect(page.locator(".b-dotted-im-e-val").last()).toHaveText(priceToBe);
});

test("Поиск по сайту (пустая выдача)", async ({page}) => {
    await openPage(page)
    await searchFor(page, "Эйяфьядлайёкюдль")
    // запомнили первую карточку товара
    await expect(page.locator("h1").first()).toHaveText("Мы ничего не нашли по вашему запросу! Что делать?")
    await openCart(page)
    await expect(page.locator("#basket-step1-default .g-alttext-small.g-alttext-grey.g-alttext-head").first()).toHaveText("ВАША КОРЗИНА ПУСТА. ПОЧЕМУ?", {ignoreCase: true})
});

// открыть страницу https://www.labirint.ru
// принять политику куки
async function openPage(page: Page) {
    await page.goto("https://www.labirint.ru");
    await page.locator(".cookie-policy button").click();
}

// ввести в строку поиска javascript
// нажать кнопку Enter
async function searchFor(page: Page, term: string) {
    await page.locator("#search-field").fill(term);
    await page.locator("#search-field").press("Enter");
}

async function openCart(page: Page) {
    await page.goto("https://www.labirint.ru/cart");
}