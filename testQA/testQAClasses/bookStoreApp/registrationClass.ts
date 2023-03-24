import { Page } from "@playwright/test";

export class registration {
    constructor(public page: Page) { }

    async Registration(fname, lname, username, userpass) {
        await this.enterFname(fname);
        await this.enterLname(lname);
        await this.enterUsername(username);
        await this.enteruserPass(userpass);
        await this.notRobot()
    }

    async enterFname(fname: string) {
        await this.page.locator("//input[@id='firstname']").type(fname);
    }
    async enterLname(lname: string) {
        await this.page.locator("//input[@id='lastname']").type(lname);
    }
    async enterUsername(username: string) {
        await this.page.locator("//input[@id='userName']").type(username);
    }
    async enteruserPass(userpass: string) {
        await this.page.locator("//input[@id='password']").type(userpass);
    }
    async notRobot() {
        await this.page.click("//div[@id='g-recaptcha']");
    }
    async submit() {
        await this.page.click("//button[@id='register']");
    }
}