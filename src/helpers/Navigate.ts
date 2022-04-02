import {expect, Page} from "@playwright/test";
import {_iPage} from "../pages/_iPage";
import {frameworkLog as log} from "../utils/fLogger";

export class Navigate{
    readonly page: Page
    constructor(page: Page) {
        log("Initialising navigateTo helper...")
        this.page = page
    }

    async toLocation<T extends _iPage >(returnedPageObject: T) {
        // add custom logging here
        // @ts-ignore
        return await new returnedPageObject(this.page).load()
    }
}