import { Page } from "@playwright/test";

export class datePicker {
    constructor(public page: Page) { }

    async datePickerFunc() {

        await this.page.click("#datePickerMonthYearInput");
        await this.page.selectOption(".react-datepicker__month-select", {
            index: 2

        });
        await this.page.selectOption(".react-datepicker__year-select", {
            label: "2023"

        });
        await this.page.click("//div[text()='15']")


    }

    async datePickerIImodel() {
        const month = "April 2023"

        await this.page.locator("#dateAndTimePickerInput").click()

        while (true) {
            const textmonth = await this.page.locator("//div[contains(@class,'react-datepicker__current-month react-datepicker__current-month--hasYearDropdown')]").textContent();
            if (month == textmonth) {
                break;

            }
            else {
                // next symblo x-path
                await this.page.locator("//button[@aria-label='Next Month']").click()

            }
        }
        //     // day x-path
        await this.page.locator("//div[text()='16']").click()


    }
}