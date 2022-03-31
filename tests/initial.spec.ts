import { test, expect } from './__testBootstrap'
import {frameworkLog as log } from "../src/utils/fLogger";

test.describe('test describe', ()=> {
    test('@initial Test to check everything is working', async ({ loginPage}, testInfo) => {
        await test.step('Go to the test page and login', async () => {
            log('Loading test page...')
            // Go to 'https://www.saucedemo.com/'
            await loginPage.load()
            // @ts-ignore
            await loginPage.login()
        })
    });
})
