import {Page} from "@playwright/test";
import {LoginPage} from "./LoginPage";

export interface _iPage {
    readonly page: Page

    load(): Promise<this>
}