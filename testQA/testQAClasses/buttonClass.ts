import { expect, Page } from "@playwright/test";

export class buttonEx {
    constructor(public page: Page) { }

    async doubleClick() {
        await this.page.locator("#doubleClickBtn").dblclick();
        expect(await this.page.locator("#doubleClickMessage")).toContainText("You have done a double click")


    }
    async rightClick() {
        await this.page.click('#rightClickBtn', {
            button: 'right',
        });
        expect(await this.page.locator("#rightClickMessage")).toContainText("You have done a right click")

    }
    async buttonClick() {
        await this.page.click("//button[text()='Click Me']");
        expect(await this.page.locator("#dynamicClickMessage")).toContainText("You have done a dynamic click")

    }
}