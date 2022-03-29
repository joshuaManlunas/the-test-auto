import { test, expect } from '@playwright/test';

test.use({
    storageState: 'access.json'
});

test('test', async ({ page }) => {

    // Go to https://github.com/
    await page.goto('https://github.com/');

});