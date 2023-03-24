import { test, expect } from '@playwright/test';
import { upload } from '../testQAClasses/uploadClass';

test("upload", async ({ page, baseURL }) => {
    const up = new upload(page);
    await page.goto(`${baseURL}upload-download`);
    await up.uploadFiles();

})