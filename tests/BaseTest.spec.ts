// import {Page, test} from "@playwright/test";
import {test} from "./test";
import {initPage} from "../src/core/__FrameworkPageInit";

test.describe('@Sample', ()=> {
    let _page

    const TODO_ITEMS = [
        'buy some cheese',
        'feed the cat',
        'book a doctors appointment'
    ];

    test.beforeAll(async ({myname}, testInfo)=> {
        testInfo.project['developer'] = {myName:'JOMANS', gender:'male'}
        console.log("[TESTING 1]: " + myname.targetUrl)
        console.log("TESTING: " + testInfo.project.use.browserName)
        _page = await initPage()


        // console.log("TESTING: " + testInfo.project.use.browserName)
        await _page.goto('https://demo.playwright.dev/todomvc')
        await console.log("=========================================")
        // await console.log(testInfo)

    })

    test('Click things', async ({myname}, testInfo)=> {
        await _page.locator('.new-todo').fill(TODO_ITEMS[0]);
        await _page.locator('.new-todo').press('Enter');
        console.log('[TESTING 2] from actual test: ' + myname.targetUrl)
    })
})