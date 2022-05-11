import { IPage } from "./IPage";
import { Locator, Page } from "@playwright/test";
import * as siteUser from '../configs/Users'
import { decrypt } from "../utils/Crypter";
import { expect } from "../../tests/__testBootstrap";
import { IUser } from "../configs/IUser";

export class LoginPage implements IPage {
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
        const derivedUser : IUser = siteUser[ user ]
        await this.username.fill(derivedUser.accessNumber)
        await this.password.fill(decrypt(derivedUser.userPassword))
        await this.loginButton.click()
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }
}