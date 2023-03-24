import { Page, expect } from "@playwright/test";

export class invalidLogin {
    constructor(public page: Page) { }


    async login(uName, password) {
        await this.enterUserName(uName);
        await this.enterPassword(password);
    }

    async enterUserName(uName: string) {
        await this.page.locator("#userName").type(uName);
        expect(await this.page.locator("#userName")).toHaveAttribute("placeholder", "UserName");


    }
    async enterPassword(password: string) {
        await this.page.locator("#password").type(password);
        expect(await this.page.locator("#password")).toHaveAttribute("placeholder", "Password");

    }


    async clickLogin() {
        await Promise.all([
            this.page.click("#login")
        ]);
    }
}

