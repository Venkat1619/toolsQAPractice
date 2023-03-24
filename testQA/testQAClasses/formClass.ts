import { expect, Page } from "@playwright/test";

export class formClass {
    constructor(public page: Page) { }
    async formFunc(fname, lname, email, mob, sub, address) {
        await this.firstName(fname)
        await this.lastName(lname);
        await this.Email(email);
        await this.RadioButton();
        await this.mobileNumber(mob);
        await this.DOB();
        await this.subjects(sub);
        await this.CheckBox();
        await this.upload();
        await this.enterCurrentAddress(address);
        await this.stateDropDown();
        await this.cityDropDown();

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
    async RadioButton() {
        await this.page.click("//label[text()='Male']");
    }
    async mobileNumber(mob: string) {
        await this.page.locator("#userNumber").type(mob)
    }
    async DOB() {
        await this.page.locator("#dateOfBirthInput").click();
        await this.page.selectOption("//select[@class='react-datepicker__month-select']", {
            index: 2
        });
        await this.page.selectOption("//select[@class='react-datepicker__year-select']", {
            label: "2023"
        })
        await this.page.locator("//div[@class='react-datepicker__day react-datepicker__day--014']").click()
    }
    async subjects(sub: string) {
        await this.page.locator("//div[@id='subjectsContainer']/div[1]/div[1]").type(sub)
    }

    async CheckBox() {
        await this.page.click("//label[text()='Music']");
    }
    async upload() {
        await this.page.setInputFiles("#uploadPicture", "testQA/Tests/sample.txt")
    }
    async enterCurrentAddress(address: string) {
        await this.page.locator("#currentAddress").type(address);

    }
    async stateDropDown() {
        await this.page.click("(//div[@class=' css-1hwfws3']/following-sibling::div)[1]")
        await this.page.click("//div[@id='react-select-3-option-2']")
    }
    async cityDropDown() {
        await this.page.click("(//span[@class=' css-1okebmr-indicatorSeparator']/following-sibling::div)[2]")
        await this.page.click("//div[@id='react-select-4-option-0']");

    }
    async clickSubmit() {
        await this.page.click("#submit");
        await expect(this.page.locator("//div[@class='modal-title h4']")).toContainText("Thanks for submitting the form")


    }
}