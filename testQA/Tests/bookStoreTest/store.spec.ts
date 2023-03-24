import { test, expect } from "@playwright/test";
import { bookStoreTesting } from "../../testQAClasses/bookStoreApp/StoreTesting";


test("bookStore testing", async ({ page, baseURL }) => {
  const store = new bookStoreTesting(page)
  await page.goto(`${baseURL}login`);
  expect(await page).toHaveURL("https://demoqa.com/login");

  await store.login('Venkat1619', 'Venkat@1619')
  await store.clickLogin();
  await store.addBook();
  await store.deleteBook()
  await store.search();
  await store.logOut();




});