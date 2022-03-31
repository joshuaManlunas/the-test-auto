import {test as base} from "@playwright/test";
import * as TARGET_ENV from "../src/configs/TargetEnvConfigs";
import {_iPage} from "../src/pages/_iPage";
import {LoginPage} from "../src/pages/LoginPage";

type Pages = {
    loginPage: _iPage
}
/**
 * Provide everything a test could need eg. Page-objects, helpers, utils etc. here as fixtures
 */
export const test = base.extend<Pages>({
    //Utilities Section

    //Pages Section
    loginPage: async ({page}, use) => {
        await use( await new LoginPage(page))
    }
})

export { expect } from "@playwright/test"