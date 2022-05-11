import { Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { MainPage } from "../pages/MainPage";
import { frameworkLog as log } from "../utils/fLogger";

export const pageObjectProvider = async function (page: Page) {
    log("Initialising Page Object Provider...")
    // add initialised page objects here
    return {
        loginPage: await new LoginPage(page),
        mainPage: await new MainPage(page)
    }
}