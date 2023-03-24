import { expect, Page } from "@playwright/test";

export class toolTip {
    constructor(public page: Page) { }

    async toolTipButtonfunc() {
        await this.page.hover("#toolTipButton");
        await this.page.waitForTimeout(3000);
        expect(await this.page.locator("//div[@class='tooltip-inner']")).toContainText("You hovered over the Button");

    }
    async toolTipFieldfunc() {
        await this.page.hover("#toolTipTextField");
        expect(await this.page.locator("#toolTipTextField")).toHaveAttribute("placeholder", "Hover me to see");
        expect(await this.page.locator("//div[text()='You hovered over the text field']")).toContainText("You hovered over the text field")
    }
}