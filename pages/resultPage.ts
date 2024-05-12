import { Page, Locator } from "@playwright/test";

export class ResultPage{

    page: Page; // объявили свойство page
    private cards: Locator;

    constructor(page: Page){
        this.page = page;
        this.cards = page.locator(".product-card")
    }

    async getPriceForItem(index: number){
        const price = await this.cards.nth(index).locator(".product-card__price-current").textContent()
        return price.trim();
    }

    async addItemToCart(index: number){
        await this.cards.nth(index).locator(".buy-link").click();
    }
}