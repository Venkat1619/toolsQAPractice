import { test, expect } from "@playwright/test";
import { registration } from "../../testQAClasses/bookStoreApp/registrationClass";

test("Registraion", async ({ page, baseURL }) => {
    const register = new registration(page);
    await page.goto(`${baseURL}login`);
    await page.click("#newUser")
    await register.Registration("venkat", "sai", "Abc2226", "Abc#2226")
    await register.submit()

})