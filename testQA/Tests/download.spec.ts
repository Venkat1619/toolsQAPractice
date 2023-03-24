import { test, expect } from "@playwright/test";

test("download files", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}upload-download`)
})