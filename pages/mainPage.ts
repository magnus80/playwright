import { Page, Locator } from "@playwright/test";

export class MainPage {

    page: Page; // объявили свойство page
    cookieAcceptButton: Locator; // объявили свойство cookieAcceptButton
    searchField: Locator; // объявили свойство searchField

    constructor(page: Page) { // вот его нам выдали при создании теста
        this.page = page; // сохраняем локально
        this.cookieAcceptButton = page.locator(".cookie-policy button");
        this.searchField = page.locator("#search-field");
    }

    async openPage() {
        await this.page.goto("https://www.labirint.ru");
        await this.cookieAcceptButton.click();
    }

    async searchFor(term: string){
        await this.searchField.fill(term);
        await this.searchField.press("Enter");
    }
}