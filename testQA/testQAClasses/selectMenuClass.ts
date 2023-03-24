import { Page } from "@playwright/test";

export class selectMenu {
    constructor(public page: Page) { }

    async selectMenuFunc() {
        await this.page.click("#withOptGroup");
        await this.page.click("//div[@id='react-select-2-option-0-0']");

        await this.page.click("#selectOne");
        await this.page.click("//div[@id='react-select-3-option-0-1']")

        await this.page.selectOption("#oldSelectMenu", {
            index: 2
        })

        await this.page.selectOption("#cars", [
            {
                index: 1
            }, {
                index: 2
            }
        ])

    }
}