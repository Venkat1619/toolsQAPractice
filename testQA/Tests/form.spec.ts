import { test } from '@playwright/test';
import { formClass } from '../testQAClasses/formClass';
test("form", async ({ page, baseURL }) => {
    const fname = "venkat"
    const lname = "sai"
    const email = "abc@gmail.com"
    const mob = "1234567891"
    const sub = "hello!"
    const address = "Hyderabad"
    const form = new formClass(page);
    await page.goto(`${baseURL}automation-practice-form`);
    await form.formFunc(fname, lname, email, mob, sub, address);
    await page.waitForTimeout(3000)
    await form.clickSubmit();
})

