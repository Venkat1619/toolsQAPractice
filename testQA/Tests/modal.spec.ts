import { test, expect } from '@playwright/test';
import { modalClass } from '../testQAClasses/modalClass';

test("modal", async ({ page, baseURL }) => {
    const modals = new modalClass(page)
    await page.goto(`${baseURL}modal-dialogs`);
    await modals.modalfunc();

});

test("largeModal", async ({ page, baseURL }) => {
    const modals = new modalClass(page)
    await page.goto(`${baseURL}modal-dialogs`);
    await modals.largeModalfunc();

})