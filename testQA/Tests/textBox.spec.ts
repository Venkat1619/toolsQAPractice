import { test, expect } from "@playwright/test"
import { textBox } from "../testQAClasses/textBoxClass";

test("TextBox testing", async ({ page, baseURL }) => {
    const textbox = new textBox(page)
    await page.goto(`${baseURL}text-box`);
    expect(await page).toHaveURL("https://demoqa.com/text-box");
    await textbox.textBoxMethod("venkat", "abc@gmail.com", "hyderabad", "hyderabad")
    await textbox.clickSubmit();

})