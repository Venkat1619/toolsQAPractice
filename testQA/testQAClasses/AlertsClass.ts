import { expect, Page } from "@playwright/test";

export class alertClass {
    constructor(public page: Page) { }

    async alertpopup() {
        await this.page.on("dialog", async (alert) => {
            await alert.accept()
        })
        await this.page.locator("#alertButton").click()
    }

    async alertTimerPopup() {
        await this.page.on("dialog", async (alert) => {
            await alert.accept()
        })
        await this.page.locator("#timerAlertButton").click();
        await this.page.waitForTimeout(6000);
    }

    async alertConfirmPopup() {
        await this.page.on("dialog", async (alert) => {
            await alert.accept();
        })
        await this.page.click("#confirmButton");
        await expect(this.page.locator("#confirmResult")).toContainText("You selected Ok")

    }

    async alertPromptPopup() {
        await this.page.on("dialog", async (alert) => {
            await alert.accept('Hello World!');
        })
        await this.page.click("#promtButton");
        await expect(this.page.locator("#promptResult")).toContainText("You entered Hello World!")
    }
}