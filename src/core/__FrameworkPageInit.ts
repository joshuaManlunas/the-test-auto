import {chromium, firefox, Page, webkit, FullConfig, TestInfo} from "@playwright/test";
import * as targetEnv from "../configs/TargetEnvConfigs"
import {frameworkLog as log} from "../utils/fLogger";

/**
 * Main page initialization function to provide the page instance for the test to use.
 * @param testInfo - Playwright testInfo fixture which is made available to all tests
 */
// @ts-ignore
export async function initPage(testInfo: TestInfo, url: string = ''): Promise<Page> {
    /**
     * Default browser is chromium
     * browser option precedence is as follows ENV variable: BROWSER > project set browser > default
     */
    const browser = await {
        chromium,
        firefox,
        webkit
    }[process.env.BROWSER || testInfo.project.use.browserName || 'chromium'].launch()

    const context = await browser.newContext({
        baseURL: url || targetEnv[process.env.TAGET || 'ST'].targetUrl,
        // recordVideo: { dir: testInfo.outputPath()}
    })

    const page = await context.newPage()
    log(`[ Targeting Env: ${process.env.TAGET || 'ST'}... Domain: ${targetEnv[process.env.TAGET || 'ST'].targetUrl} ]`)

    return page
}



