import { test, expect } from "@playwright/test";
import { linkClass } from "../testQAClasses/linkClass";

test("verify page URL", async ({ page, baseURL }) => {
    const links = new linkClass(page);
    await page.goto(`${baseURL}links`);
    expect(await page.locator("//strong[text()='Following links will open new tab']")).toHaveText("Following links will open new tab")
    await links.link();
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL("https://demoqa.com/links")
});

test("Following links will send an api call", async ({ page, baseURL }) => {
    const links = new linkClass(page);
    await page.goto(`${baseURL}links`);
    await expect(page.locator("//strong[text()='Following links will send an api call']")).toHaveText("Following links will send an api call");
    await links.apiLinkEx();
    await expect(page.locator("#linkResponse")).toHaveText("Link has responded with staus 404 and status text Not Found");


})

