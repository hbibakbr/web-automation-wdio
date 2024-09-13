const { expect } = require('@wdio/globals')
const assert = require('assert')

describe('Open Sauce Demo', () => {
    it('Should open browser and redirect to saucedemo.com', async () => {
        //Buka Web Browser dan Url
        await browser.url('/')

        // Verify page title
        const pageTitle = await browser.getTitle();
        await assert.strictEqual(pageTitle, "Swag Labs")

        // Selector Username, Wait Element is Visible
        await $('input#user-name').setValue('standard_user');
        await $('input#password').setValue('secret_sauce');
        // await expect(usernameField).toBeDisplayed(); 

        await $('input#login-button').click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

    })
})