import { expect, Page } from "@playwright/test";

export class textBox {
    constructor(public page: Page) { }
    async textBoxMethod(fname, email, address, Peraddress,) {
        await this.enterFullName(fname);
        this.enterEmail(email);
        this.enterCurrentAddress(address);
        this.enterPermanentAddress(Peraddress)
    }
    async enterFullName(fname: string) {
        await this.page.locator("#userName").type(fname);
        expect(await this.page.locator("#userName")).toHaveAttribute("placeholder", "Full Name")

    }
    async enterEmail(email: string) {
        await this.page.locator("#userEmail").type(email);
        expect(await this.page.locator("#userEmail")).toHaveAttribute("placeholder", "name@example.com")
    }
    async enterCurrentAddress(address: string) {
        await this.page.locator("#currentAddress").type(address);
        expect(await this.page.locator("#currentAddress")).toHaveAttribute("placeholder", "Current Address")
    }
    async enterPermanentAddress(Peraddress: string) {
        await this.page.locator("#permanentAddress").type(Peraddress);

    }
    async clickSubmit() {
        await this.page.click("#submit")

    }

}