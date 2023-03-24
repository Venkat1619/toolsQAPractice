import { Page } from "@playwright/test";

export class upload {
    constructor(public page: Page) { }
    async uploadFiles() {
        await this.page.setInputFiles("#uploadFile", 'testQA/Tests/sample.txt');
    }


}