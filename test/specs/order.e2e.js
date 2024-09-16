const { expect } = require('@wdio/globals')
const Page = require('../pageobjects/page.js')
const LoginPage = require('../pageobjects/login.page.js')
const InventoryPage = require('../pageobjects/inventory.page.js')
const CartPage = require('../pageObjects/cart.page.js')
const CheckoutPage = require('../pageObjects/checkout.page.js')
const OverviewPage = require('../pageObjects/overview.page.js')
const CompletePage = require('../pageObjects/complete.page.js')

describe('End to End Testing Order', () => {

    before(async () => {
        Page.open('/');
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(InventoryPage.productPageTitle).toBeExisting();
    });

    it('Success Add to Cart Product', async () => {
        await InventoryPage.addToCart.click();
        await InventoryPage.assertBadges();
        await browser.pause(2000);
    });

    it('Success Access Cart Page', async () => {
        await InventoryPage.cart.click();
        await CartPage.assertProductTest();
        await browser.pause(2000);
    });

    it('Success Checkout an Product', async () => {
        await CartPage.btnCheckout.click();
        await expect(CheckoutPage.checkoutPageTitle).toBeExisting();
        await browser.pause(2000);
    });

    it('Success Providing Firstname Lastname Postal Code for Order Information', async () => {
        await expect(CheckoutPage.inputFirstname).toBeExisting();
        await expect(CheckoutPage.inputLastname).toBeExisting();
        await expect(CheckoutPage.inputPostalCode).toBeExisting();
        await browser.pause(2000);

        await CheckoutPage.inputForm('John', 'Doe', '1123');
        await CheckoutPage.btnContinue.click();
        
        await expect(OverviewPage.overviewPageTitle).toBeExisting();
        await browser.pause(2000);
    });

    it('Success Finish an Order', async () => {
        await expect(OverviewPage.overviewPageTitle).toBeExisting();
        await OverviewPage.btnFinish.click();

        await CompletePage.assertSuccessOrder();
        await CompletePage.btnBackHome.click();
        await browser.pause(2000);

        await InventoryPage.assertInventoryUrl();
        await browser.pause(2000);
    });

});