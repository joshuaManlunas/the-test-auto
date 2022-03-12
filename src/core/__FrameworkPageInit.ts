import {chromium, firefox, Page, webkit} from "@playwright/test";

// @ts-ignore
export async function initPage(): Page {
    //chromium is the default browser unless TARGET is set as an env variable
    const browser = await {chromium, firefox, webkit}[process.env.TARGET || 'chromium'].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    return page
}



