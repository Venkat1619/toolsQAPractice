import { expect, Page } from "@playwright/test";

export class modalClass {
    constructor(public page: Page) { }
    async modalfunc() {
        await this.page.click("#showSmallModal");
        await this.page.waitForSelector('.modal-content');
        await this.page.click('#closeSmallModal');
        expect(await this.page.locator(".modal-body")).toContainText("This is a small modal. It has very less content");

    };

    async largeModalfunc() {
        await this.page.click("#showLargeModal");
        await this.page.waitForSelector('.modal-content');
        await this.page.click('#closeLargeModal');
        expect(await this.page.locator(".modal-header")).toBeVisible()

    }
}