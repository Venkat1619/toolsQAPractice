import { test, expect } from "@playwright/test";

test("Accordions tetsing", async ({ page }) => {
    await page.goto('https://demoqa.com/accordian');
    const accordionHeaders = await page.locator('#accordianContainer');
    await accordionHeaders.locator("#section2Heading").click();
    expect(await page.locator("#section2Content")).toBeVisible();
    expect(await accordionHeaders.locator("#section3Content")).not.toBeVisible();
    await accordionHeaders.locator("#section3Heading").click();
    expect(await page.locator("#section3Content")).toBeVisible();
    expect(await accordionHeaders.locator("#section2Content")).not.toBeVisible();
    expect(await accordionHeaders.locator("#section1Content")).not.toBeVisible();



})