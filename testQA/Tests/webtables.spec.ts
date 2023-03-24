import { test, expect } from '@playwright/test';
import { webTables } from '../testQAClasses/webTables';
test("web Tables testing", async ({ page, baseURL }) => {
    const tables = new webTables(page);

    await page.goto(`${baseURL}webtables`);

    await tables.addNewRecordButton();
    await tables.Registration("venkat", "sai", "abc@gmail.com", "12", "25000", "software");
    await tables.clickSubmit();
    await tables.clickedit();
    await tables.editage("developer");
    await tables.clickSubmit();
    await page.waitForTimeout(3000)
    await tables.deleteRecord();
    await tables.search("sai");
    expect(await page.locator("#searchBox")).toHaveAttribute("placeholder", "Type to search")

})