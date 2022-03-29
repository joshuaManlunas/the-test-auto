import { test } from "./testBootstrap";
import {initPage} from "../src/core/__FrameworkPageInit";
import {expect, Page} from "@playwright/test";

// test.use({video: "on"})
test.describe.serial('@sample This is a sample test', ()=> {

    let _page : Page

    const TODO_ITEMS = [
        'buy some cheese',
        'feed the cat',
        'book a doctors appointment'
    ];

    test.beforeAll(async ({myname}, testInfo)=> {
        await console.log("TESTING: " + testInfo.project.use.browserName)
        _page = await initPage(testInfo)


        // console.log("TESTING: " + testInfo.project.use.browserName)
        await _page.goto('/')
        await console.log("=========================================")
        // await console.log(testInfo)

    })

    test('Test 1 pass', async ({}, testInfo)=> {
        // await _page.locator('.new-todo').fill(TODO_ITEMS[0]);
        // await _page.locator('.new-todo').press('Enter');
        expect(true).toBe(true)
    })

    test('Test 2 fail;', async ()=> {
        expect(true).toBe(true)
    })

    test('Test 3 pass', async ()=> {
        expect(true).toBe(true)
    })

    test.afterAll(async ()=> {
        console.log("Closing browser...")
        await _page.close()
    })
})