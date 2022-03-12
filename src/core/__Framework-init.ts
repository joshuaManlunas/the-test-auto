import { chromium, FullConfig } from '@playwright/test';

async function frameworkInit(config: FullConfig) {
    await console.log('[ Initializing Framework ]...')
    await console.log('[ Configuring target Environment ]')
    /**
     * Do all test environment setup here...
     */
}

export default frameworkInit