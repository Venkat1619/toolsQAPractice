import { test, expect } from '@playwright/test'
import { checkBox } from '../testQAClasses/checkBoxClass'

test.describe("checkBox", async () => {
  test("checkBox testing", async ({ page, baseURL }) => {
    const check = new checkBox(page)
    await page.goto(`${baseURL}checkbox`);
    await check.clickExpandButton();
    await check.clickCollapseButton()
    await check.homeCheckBox();
    expect(await page.locator("//span[text()='Home']")).toBeChecked();
    await check.clickDownArrow()
    await check.homeCheckBox();
    expect(await page.locator("//span[text()='Home']")).not.toBeChecked();

    await check.desktopCheckBox()
    expect(await page.locator("//span[text()='Desktop']")).toBeChecked();
    expect(await page.locator("//span[text()='Home']")).not.toBeChecked();
    expect(await page.locator("//div[@class='display-result mt-4']")).toContainText("You have selected :desktopnotescommands");
    await check.clickDesktopDownArrow();
    await check.desktopCheckBox();
    expect(await page.locator("//span[text()='Desktop']")).not.toBeChecked();
    await check.notesCheckBox();
    expect(await page.locator("//div[@class='display-result mt-4']")).toContainText("You have selected :notes");

  })
})

