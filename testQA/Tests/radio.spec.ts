import { test, expect } from '@playwright/test';
import { radio } from '../testQAClasses/RadioClass';

test("Acceptance radio button", async ({ page, baseURL }) => {
    const radioBtn = new radio(page);
    await page.goto(`${baseURL}radio-button`);
    await radioBtn.yesRadioButton();
    expect(await page).toHaveURL("https://demoqa.com/radio-button");
    await radioBtn.impressiveRadioButton();

})