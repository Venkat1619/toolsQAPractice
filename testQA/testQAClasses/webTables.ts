import { Page } from "@playwright/test";

export class webTables {
    constructor(public page: Page) { }
    async Registration(fname, lname, email, age, sal, dept) {
        await this.firstName(fname);
        await this.lastName(lname);
        await this.Email(email);
        await this.Age(age);
        await this.salary(sal);
        await this.Department(dept);

    }

    async addNewRecordButton() {
        await this.page.click("#addNewRecordButton");
    }
    async firstName(fname: string) {
        await this.page.locator("#firstName").type(fname)
    }
    async lastName(lname: string) {
        await this.page.locator("#lastName").type(lname)
    }
    async Email(email: string) {
        await this.page.locator("#userEmail").type(email)
    }
    async Age(age: string) {
        await this.page.locator("#age").type(age)
    }
    async salary(sal: string) {
        await this.page.locator("#salary").type(sal)
    }
    async Department(dept: string) {
        await this.page.locator("#department").type(dept)
    }
    async clickSubmit() {
        await this.page.click("#submit")

    }

    async clickedit() {
        await this.page.click("#edit-record-1")


    }
    async editage(dept: string) {
        await this.page.locator("#department").fill(dept)

    }
    async deleteRecord() {
        await this.page.click("#delete-record-2")
    }
    async search(search: string) {
        await this.page.locator("#searchBox").type(search)

    }

}