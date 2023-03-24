import { test, expect } from "@playwright/test";
import { selectMenu } from "../testQAClasses/selectMenuClass";

test("testing of menu", async ({ page, baseURL }) => {
    const menu = new selectMenu(page);

    await page.goto(`${baseURL}select-menu`);
    await menu.selectMenuFunc()

})