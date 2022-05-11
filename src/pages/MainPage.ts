import {Page} from "@playwright/test";
import {IPage} from "./IPage";
import {expect} from "../../tests/__testBootstrap";

/**
 * This Page Object is not made properly because I didn't see the need to because you should be using the
 * LoginPage.ts as a template. This file was create just for quick testing use.
 */
export class MainPage implements IPage{
    readonly page : Page

    constructor(page: Page) {
        this.page = page;
    }
    async load(): Promise<this> {
        await this.page.goto('/inventory.html')
        return this
    }
    async addItemsToCart() {
        // Click [data-test="add-to-cart-sauce-labs-backpack"]
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        // Click [data-test="add-to-cart-sauce-labs-bike-light"]
        await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        // Click [data-test="add-to-cart-sauce-labs-bolt-t-shirt"]
        await this.page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        // Click [data-test="add-to-cart-sauce-labs-fleece-jacket"]
        await this.page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    }
    async removeItemsFromCart() {
        // Click a:has-text("4")
        await this.page.locator('a:has-text("4")').click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
        // Click [data-test="remove-sauce-labs-backpack"]
        await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
        // Click [data-test="remove-sauce-labs-bolt-t-shirt"]
        await this.page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
        // Click [data-test="remove-sauce-labs-fleece-jacket"]
        await this.page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click();
        // Click [data-test="remove-sauce-labs-bike-light"]
        await this.page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
    }

    async checkItemsAndDoThings() {
        // Click text=Open Menu
        await this.page.locator('text=Open Menu').click();
        // Click text=All Items
        await this.page.locator('text=All Items').click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
        // Click text=Sauce Labs Backpack
        await this.page.locator('text=Sauce Labs Backpack').click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4');
        // Click [data-test="back-to-products"]
        await this.page.locator('[data-test="back-to-products"]').click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
        // Click text=Sauce Labs Bike Light
        await this.page.locator('text=Sauce Labs Bike Light').click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=0');
        // Click [data-test="back-to-products"]
        await this.page.locator('[data-test="back-to-products"]').click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
        // Click #item_1_title_link >> text=Sauce Labs Bolt T-Shirt
        await this.page.locator('#item_1_title_link >> text=Sauce Labs Bolt T-Shirt').click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=1');
        // Click [data-test="back-to-products"]
        await this.page.locator('[data-test="back-to-products"]').click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
        // Click text=Sauce Labs Fleece Jacket
        await this.page.locator('text=Sauce Labs Fleece Jacket').click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=5');
        // Click [data-test="back-to-products"]
        await this.page.locator('[data-test="back-to-products"]').click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }
}