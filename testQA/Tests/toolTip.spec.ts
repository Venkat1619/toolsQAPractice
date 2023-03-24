import { test, expect } from '@playwright/test';
import { toolTip } from '../testQAClasses/toolTipsClass';

test("hover ", async ({ page, baseURL }) => {
    const tool = new toolTip(page)
    await page.goto(`${baseURL}tool-tips`);
    await tool.toolTipButtonfunc();
    await tool.toolTipFieldfunc();

})  