const { expect } = require('@wdio/globals')
const Page = require('../pageobjects/page.js')
const LoginPage = require('../pageobjects/login.page.js')
const InventoryPage = require('../pageobjects/inventory.page.js')
const CartPage = require('../pageObjects/cart.page.js')
const CheckoutPage = require('../pageObjects/checkout.page.js')

describe('Checkout', () => {

    before(async () => {
        Page.open('/');
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.assertInventoryUrl();
        await InventoryPage.addToCart.click()
        await InventoryPage.cart.click()
        await browser.pause(5000);
    })

    it('Success Checkout an Product', async () => {
        await CartPage.assertProductTest()
        await CartPage.btnCheckout.click()
        await expect(CheckoutPage.checkoutPageTitle).toBeExisting()
        await browser.pause(5000);
    })

})