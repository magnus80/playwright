import {expect, test} from "@playwright/test";
import * as fs from "fs";

test("check response",
    async ({request}) => {
        const response = await request.post("https://todo-app-sky.herokuapp.com", {
            data: {
                "title": "ftytyrty", "completed": false
            }
        });
        expect(response.status()).toEqual(201);
        const body = await response.json()

        expect(body['completed']).toEqual(false);
        expect(body['id'] > 0);
    })

test("download",
    async ({request}) => {
        const url = "https://www.datocms-assets.com/19381/1580306481-the-ultimate-css-selectors-cheatsheet.pdf";
        const response = await request.get(url);
        const body = await response.text()
        fs.writeFileSync("selectors.pdf", body);
    })

test("download index", async ({request}) => {
    const url = "https://google.com/search?q=playwright";
    const response = await request.get(url);
    const body = await response.text()
    fs.writeFileSync("index.html", body);
})