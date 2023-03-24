import { Page } from "@playwright/test";

export class checkBox {
    constructor(public page: Page) { }

    async clickExpandButton() {
        await this.page.click("//button[@title='Expand all']");
    }
    async clickCollapseButton() {
        await this.page.click("//button[@title='Collapse all']");
    }
    async homeCheckBox() {
        await this.page.click("//span[text()='Home']");
    }
    async clickDownArrow() {
        await this.page.click("(//button[@class='rct-collapse rct-collapse-btn'])[1]");

    }
    async desktopCheckBox() {
        await this.page.click("//span[text()='Desktop']");

    }
    async clickDesktopDownArrow() {
        await this.page.click("(//button[@class='rct-collapse rct-collapse-btn'])[2]");

    }
    async notesCheckBox() {
        await this.page.click("//span[text()='Notes']")
    }
}