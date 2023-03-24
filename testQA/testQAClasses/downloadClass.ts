import { Page } from "@playwright/test";

export class downlaod {
    constructor(public page: Page) { }
    async downloadfunc() {
        const download = await Promise.all([
            this.page.waitForEvent("download"),
            this.page.click("#downloadButton")

        ])
        const fileName = await download[0].suggestedFilename()
        await download[0].saveAs(fileName)
    }
}