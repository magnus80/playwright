import {expect, test} from "@playwright/test";

const url = "https://qa-stand-employees.inzhenerka.tech";

test.describe("Тесты на создание компании",
    async () => {

        test.beforeEach("Авторизоваться", async ({page}) => {
            await page.goto(url)
            await page.locator("input[type=text]").fill("leonardo");
            await page.locator("input[type=password]").fill("leads");
            await page.locator("button[type=submit]").click();
            await expect(page.locator("h6").first()).toContainText("👋 Привет, ")
            // общие шаги для тестов
        });

        test("Позитивный. Создание компании со всеми полями", {tag: "@Позитивный"},
            async ({page}) => {

                await page.getByTestId("AddIcon").first().click();
                const form = page.getByRole("dialog");
                await expect(form).toBeVisible();
                await form.locator("input[type=text]").first().fill("Test 1");
                await form.locator("input[type=text]").last().fill("Desc 1");
                await form.getByText("Добавить").last().click();
                await expect(form).toBeHidden();
            });

        test("Позитивный. Создание компании только с названием",
            {tag: "@Позитивный"},
            async ({page}) => {

                await page.getByTestId("AddIcon").first().click();
                const form = page.getByRole("dialog");
                await expect(form).toBeVisible();
                await form.locator("input[type=text]").first().fill("Test 2");
                await form.getByText("Добавить").last().click();
                await expect(form).toBeHidden();
            });

        test("Негативный. Создание компании только с описанием",
            {tag: "@Негативный"},
            async ({page}) => {

                await page.getByTestId("AddIcon").first().click();
                const form = page.getByRole("dialog");
                await expect(form).toBeVisible();
                await form.locator("input[type=text]").last().fill("Компания не будет создана");
                await expect(form.getByText("Добавить").last()).toBeDisabled();
            });

        test("Негативный. Создание компании. Пробел, вместо названия",
            {tag: "@Негативный"},
            async ({page}) => {

                await page.getByTestId("AddIcon").first().click();
                const form = page.getByRole("dialog");
                await expect(form).toBeVisible();
                await form.locator("input[type=text]").first().fill(" ");
                await form.locator("input[type=text]").last().fill("Компания не будет создана");
                await expect(form.getByText("Добавить").last()).toBeDisabled();
            });

    });

