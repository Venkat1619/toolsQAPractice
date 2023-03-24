import { test, expect } from '@playwright/test';
import { brokenimg } from '../testQAClasses/brokenimgClass';

test("broken Images", async ({ page, baseURL }) => {
    const brimg = new brokenimg(page)
    await page.goto(`${baseURL}broken`);
    await brimg.verifyBrokenImages()
});

test("verifyLink", async ({ page, baseURL }) => {
    const brimg = new brokenimg(page)
    await page.goto(`${baseURL}broken`);
    await brimg.verifyLinks();
});

test("verifyBrokenLink", async ({ page, baseURL }) => {
    const brimg = new brokenimg(page)
    await page.goto(`${baseURL}broken`);
    await brimg.verifyBrokenLinks();

})


