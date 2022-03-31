import { FullConfig } from '@playwright/test';
import { frameworkLog } from "../utils/fLogger";
import * as path from "path";

let PropertiesReader = require('properties-reader');
let properties = PropertiesReader(`${path.resolve('./')}/framework.properties`)

async function frameworkInit(config: FullConfig) {
    await frameworkLog('[ Initializing Framework ]...')
    let requiredEnv = ['EVAR1', 'EVAR2', 'EVAR3'];
    frameworkLog(`Checking required env variables`)
    if(properties.get('envVarCheck')) {
        for (let envVar of requiredEnv) {
            if (process.env.hasOwnProperty(envVar)) {
                frameworkLog(`${envVar} was found`)
            } else {
                frameworkLog(`${envVar} was NOT found...`)
                frameworkLog(`...exiting process`)
                process.exit(1);
            }
        }
    } else {
        await frameworkLog('[ Skipping environment variable checks ]...')
    }
    await frameworkLog(`ENV CHECK: ${(process.env).hasOwnProperty('NAME')}`)
    /**
     * Do all testBootstrap environment setup here...
     */
}

export default frameworkInit