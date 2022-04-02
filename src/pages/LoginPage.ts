import {_iPage} from "./_iPage";
import {Locator, Page} from "@playwright/test";
import * as siteUser from '../configs/Users'
import {decrypt} from "../utils/Crypter";
import {expect} from "../../tests/__testBootstrap";

export class LoginPage implements _iPage {
    readonly page: Page
    readonly username: Locator
    readonly password: Locator
    readonly loginButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('[data-test="username"]')
        this.password = page.locator('[data-test="password"]')
        this.loginButton = page.locator('[data-test="login-button"]')
    }

    async load(): Promise<this> {
        await this.page.goto('/')
        return this
    }

    async login(user: string = 'DEFAULT_USER') {
        let derived_user : _iUser = siteUser[ user ]
        await this.username.fill(derived_user.accessNumber)
        await this.password.fill(decrypt(derived_user.userPassword))
        await this.loginButton.click()
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }
}