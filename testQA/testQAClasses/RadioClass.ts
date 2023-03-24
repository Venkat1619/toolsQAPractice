import { expect, Page } from "@playwright/test";

export class radio {
    constructor(public page: Page) { }
    async yesRadioButton() {
        await this.page.click("label[for='yesRadio']");
        expect(await this.page.locator("p.mt-3")).toContainText("You have selected Yes");
    }
    async impressiveRadioButton() {
        await this.page.click("label[for='impressiveRadio']");
    }
}