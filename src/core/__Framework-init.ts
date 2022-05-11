import { FullConfig } from '@playwright/test';
import { frameworkLog } from "../utils/fLogger";
import { prop } from "../utils/fProperties"

async function frameworkInit(config: FullConfig) {
    await frameworkLog('[ Initializing Framework ]...')

    /** Check all your required env variables...
     * decryption KEY will need to be checked here if you are going to use this feature
     * To see the defaults check Crypter.ts file.
     */
    const requiredEnv = [
        'TARGET'
        // ,'KEY' <-- recommended to set this key as an env variable via the command line
    ];

    frameworkLog(`Checking required env variables`)
    /**
     * Do all framework setup here including handling of all props that has been set in the framework.properties file
     */
    if(prop.envVarCheck) { // required env variables check is disabled by default
        for (const envVar of requiredEnv) {
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