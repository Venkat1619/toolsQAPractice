import { expect, Page } from "@playwright/test";

export class frame {
    constructor(public page: Page) { }

    async simpleFrame1() {
        const frames = await this.page.frameLocator("#frame1");
        await expect(frames.locator("#sampleHeading")).toContainText("This is a sample page");
    }
    async simpleFrame2() {
        const frames = await this.page.frameLocator("#frame2");
        await expect(frames.locator("h1")).toBeVisible();
    }

    async nestedFrame() {
        const parentFrame = await this.page.frameLocator("#frame1")
        const parentBody = parentFrame.locator('body');
        expect(await parentBody).toContainText("Parent frame");
        const childFrame = await parentFrame.frameLocator("//iframe[@srcdoc]")
        const childBody = childFrame.locator('body');
        expect(await childBody).toContainText("Child Iframe")
    }
}