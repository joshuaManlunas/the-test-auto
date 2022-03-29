import {Page} from "@playwright/test";

export interface _iPage {
    readonly page: Page
    load(): Promise<Page>
}