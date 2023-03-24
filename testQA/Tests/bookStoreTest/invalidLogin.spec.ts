import { test, expect } from '@playwright/test'
import { invalidLogin } from '../../testQAClasses/bookStoreApp/invalidLogin'

// incorrect password and username

test("invalid", async ({ page, baseURL }) => {
    const invalid = new invalidLogin(page)
    await page.goto(`${baseURL}login`);
    expect(await page).toHaveURL("https://demoqa.com/login");
    await invalid.login('Venkat16', 'Venkat')
    await invalid.clickLogin();
    expect(await page.locator("//p[@id='name']")).toContainText("Invalid username or password!")
})

// login without credentials
test("click login without credentials", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}login`);
    const invalid = new invalidLogin(page);
    await invalid.clickLogin();
    const styledColor = await page.$eval('input', (el) => getComputedStyle(el).color);
    expect(await styledColor).toBe('rgb(73, 80, 87)')
})