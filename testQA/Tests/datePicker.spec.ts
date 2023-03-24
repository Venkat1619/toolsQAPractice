import { test, expect } from "@playwright/test";
import { datePicker } from "../testQAClasses/datePickerClass";

test("date picker", async ({ page, baseURL }) => {
    const dateEx = new datePicker(page);
    await page.goto(`${baseURL}date-picker`);
    await dateEx.datePickerFunc();
})

test("dates for prev or next month with loop", async ({ page, baseURL }) => {

    const dateEx = new datePicker(page);
    await page.goto(`${baseURL}date-picker`);
    await dateEx.datePickerIImodel();

})