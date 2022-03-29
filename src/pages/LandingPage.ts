import {_iPage} from "./_iPage";
import {Page} from "@playwright/test";

export class LandingPage implements _iPage {
    readonly page: Page
    load(): Promise<Page> {
        return Promise.resolve(undefined)
    }
}