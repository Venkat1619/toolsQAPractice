import { test, expect } from "@playwright/test";
import { alertClass } from "../testQAClasses/AlertsClass";

test.describe("Testing of all type of Alerts", async () => {
    test("alertPopup", async ({ page, baseURL }) => {
        const alertEx = new alertClass(page);
        await page.goto(`${baseURL}alerts`);
        await alertEx.alertpopup();

    });
    test("alertTimerPopup", async ({ page, baseURL }) => {
        const alertEx = new alertClass(page);
        await page.goto(`${baseURL}alerts`);
        await alertEx.alertTimerPopup()

    });
    test("alertConfirmPopup", async ({ page, baseURL }) => {
        const alertEx = new alertClass(page);
        await page.goto(`${baseURL}alerts`);
        await alertEx.alertConfirmPopup();
    });

    test("promptPopup", async ({ page, baseURL }) => {
        const propmt = new alertClass(page)
        await page.goto(`${baseURL}alerts`);
        await propmt.alertPromptPopup();
    })
})