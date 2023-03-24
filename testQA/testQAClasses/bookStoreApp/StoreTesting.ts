import { Page, expect } from "@playwright/test";

export class bookStoreTesting {
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
            this.page.waitForNavigation(),
            this.page.click("#login")
        ]);
        expect(await this.page.locator("//div[@class='main-header']")).toContainText("Profile");
        expect(await this.page.locator("//button[text()='Log out']")).toBeVisible()
    }

    async search() {
        await this.page.locator("//input[@id='searchBox']").type("Git")

    }
    async addBook() {
        await this.page.locator("#gotoStore").click();
        await this.page.click("//a[text()='Speaking JavaScript']");
        this.page.on("dialog", async (alert) => {
            await alert.accept();

        });
        await this.page.click("// button[text()='Add To Your Collection']");
        await this.page.click("// button[text()='Back To Book Store']");
        await this.page.click("//span[text()='Profile']");
    }
    async deleteBook() {
        await this.page.click("(//span[@title='Delete'])[2]");
        expect(await this.page.locator(" (//div[text()='Do you want to delete this book?'])")).toContainText("Do you want to delete this book?")
        await this.page.click("#closeSmallModal-ok")
    }
    async logOut() {
        await this.page.click("//button[text()='Log out']")
    }
}

