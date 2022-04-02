import { test, expect } from './__testBootstrap'
import {frameworkLog as log } from "../src/utils/fLogger";

/**
 * This test follows the Page Object Model type of testing. Another option is to follow
 * the less structured type as shown in example.spec.ts
 */
test.describe('Grouping tests with test describe', ()=> {
    test('@initial Test to check everything is working', async ({ loginPage, mainPage}) => {
        await test.step('Go to the test page and login', async () => {
            log('Loading test page...')
            // Go to 'https://www.saucedemo.com'
            await loginPage.load()
            // @ts-ignore
            await loginPage.login()
        })
        await test.step('Add items to cart', async () => {
            await mainPage.addItemsToCart()
        });
        await test.step('Remove items from cart', async () => {
            await mainPage.removeItemsFromCart()
        });
        await test.step('Check items and do things', async () => {
            await mainPage.checkItemsAndDoThings()
        });
    });
})
