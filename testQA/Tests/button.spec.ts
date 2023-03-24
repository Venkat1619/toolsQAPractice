import { test, expect } from "@playwright/test";
import { buttonEx } from "../testQAClasses/buttonClass";

test("button tetsing", async ({ page, baseURL }) => {
    const doubleBtn = new buttonEx(page)
    await page.goto(`${baseURL}buttons`);
    await doubleBtn.doubleClick();
    await doubleBtn.rightClick();
    await doubleBtn.buttonClick();
})