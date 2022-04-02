import {test as base} from "@playwright/test";
import {LoginPage} from "../src/pages/LoginPage";
import {MainPage} from "../src/pages/MainPage";
import {Navigate} from "../src/helpers/Navigate";
import {pageObjectProvider} from "../src/helpers/PageObjectProvider";

type Pages = {
    loginPage: LoginPage,
    mainPage: MainPage
}

type Helpers = {
    navigateTo: Navigate,
    // @ts-ignore
    pageProvider: pageObjectProvider
}
/**
 * Provide everything a test could need eg. Page-objects, helpers, utils etc. here as fixtures.
 * If in case you want to separate out the helpers, utils etc. just create a new type eg. type Helpers = {}, type Utils = {} ,etc.
 * Then just add them to the base.extend params eg. base.extend< Pages & Helpers & Utils >
 */
export const test = base.extend<Pages & Helpers>({
    //Pages Section
    loginPage: async ({page}, use) => {
        await use( await new LoginPage(page) )
    },
    mainPage: async ({page}, use) => {
        await use( await new MainPage(page) )
    },
    //Utilities Section

    //Helpers Section
    navigateTo: async ({page}, use)=> {
      await use(await new Navigate(page))
    },
    pageProvider: async ({page}, use)=> {
        // @ts-ignore
        await use(await pageObjectProvider(page))
    }
})

export { expect } from "@playwright/test"