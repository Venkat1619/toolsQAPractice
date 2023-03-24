import { test, expect } from '@playwright/test';

test.describe("windows opertion", async () => {
    test("new tab testing", async ({ page, baseURL }) => {
        await page.goto(`${baseURL}browser-windows`);
        const [newWindow] = await Promise.all([
            page.waitForEvent("popup"),
            page.click("#tabButton")

        ])
        await expect(newWindow.url()).toEqual("https://demoqa.com/sample")
    });

    test("new window testing", async ({ page, baseURL }) => {
        await page.goto(`${baseURL}browser-windows`);
        const [newWindow] = await Promise.all([
            page.waitForEvent("popup"),
            page.click("#windowButton")

        ])
        await expect(newWindow.url()).toEqual("https://demoqa.com/sample")
    })

    test("new windowMessage testing", async ({ page, baseURL }) => {
        await page.goto(`${baseURL}browser-windows`);
        const [newWindow] = await Promise.all([
            page.waitForEvent("popup"),
            page.click("#messageWindowButton")

        ])
        expect(await newWindow.content()).toContain("Knowledge increases by sharing but not by saving")

    })
})