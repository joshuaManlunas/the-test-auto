import {test as base} from "@playwright/test";
import * as TARGET_ENV from "../src/configs/TargetEnvConfigs";
import {_iPage} from "../src/pages/_iPage";
import {LoginPage} from "../src/pages/LoginPage";
import {MainPage} from "../src/pages/MainPage";

type Pages = {
    loginPage: LoginPage,
    mainPage: MainPage
}
/**
 * Provide everything a test could need eg. Page-objects, helpers, utils etc. here as fixtures
 */
export const test = base.extend<Pages>({
    //Utilities Section

    //Pages Section
    loginPage: async ({page}, use) => {
        await use( await new LoginPage(page) )
    },
    mainPage: async ({page}, use) => {
        await use( await new MainPage(page) )
    }
})

export { expect } from "@playwright/test"