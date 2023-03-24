import { Page } from "@playwright/test";

export class linkClass {
    constructor(public page: Page) { }

    async link() {
        await this.page.click("#simpleLink");

    }
    async apiLinkEx() {
        await this.page.locator("#created").click();
        await this.page.locator("#no-content").click();
        await this.page.locator("#moved").click();
        await this.page.locator("#bad-request").click();
        await this.page.locator("#unauthorized").click();
        await this.page.locator("#forbidden").click();
        await this.page.locator("#invalid-url").click();



    }
}