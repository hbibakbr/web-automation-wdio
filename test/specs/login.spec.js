const { expect } = require('@wdio/globals')
const Page = require('../pageobjects/page.js')
const LoginPage = require('../pageobjects/login.page.js')
const InventoryPage = require('../pageobjects/inventory.page.js')

describe('Login', () => {
    
    beforeEach(async () => {
        await Page.open('/')
    })

    it('user success login with valid credentials', async () => {
        await LoginPage.login('standard_user', 'secret_sauce')
        await InventoryPage.assertInventoryUrl()
        await expect(InventoryPage.productPageTitle).toBeExisting()
        await expect(InventoryPage.productPageTitle).toHaveText(expect.stringContaining('Products'))
    })

    it('user failed login with invalid username', async () => {
        await LoginPage.login('standard_invalid', 'secret_sauce')
        await LoginPage.assertFailedLoginMsg()

    })

    it('user failed login with invalid password', async () => {
        await LoginPage.login('standard_user', 'secret_invalid')
        await LoginPage.assertFailedLoginMsg()

    })
})

