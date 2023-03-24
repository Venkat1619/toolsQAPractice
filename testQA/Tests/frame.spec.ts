import { test, expect } from '@playwright/test';
import { frame } from '../testQAClasses/frameClass';

//simple frames
test("frame1 example", async ({ page, baseURL }) => {
    const frames = new frame(page)
    await page.goto(`${baseURL}frames`);
    await frames.simpleFrame1();


})

test("frame2 example", async ({ page, baseURL }) => {
    const frames = new frame(page)
    await page.goto(`${baseURL}frames`);
    await frames.simpleFrame2();

});

//nested frames

test("nested Frame", async ({ page, baseURL }) => {
    const frames = new frame(page)
    await page.goto(`${baseURL}nestedframes`);
    await frames.nestedFrame();

});