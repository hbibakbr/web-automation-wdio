const { expect } = require('@wdio/globals')
const Page = require('../pageobjects/page.js')
const LoginPage = require('../pageobjects/login.page.js')
const InventoryPage = require('../pageobjects/inventory.page.js')
const DetailPage = require('../pageobjects/detail.page.js')
const SidebarPage = require('../pageobjects/sidebar.page.js')

describe('Add to Cart', () => {

    before(async () => {
        Page.open('/');
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.assertInventoryUrl();
    });

    it('Success Add to Cart on Inventory Page', async () => {
        await InventoryPage.addToCart.click();
        await InventoryPage.assertBadges();
        await browser.pause(5000);
    });

    it('Success Remove Product on Cart', async () => {
        await InventoryPage.removeProduct.click()
        await InventoryPage.assertRemoveBadges();
        await browser.pause(5000);
    });

    it('Success Access Detail Page', async () => {
        await InventoryPage.productTest.click()
        await expect(DetailPage.productTestName).toBeExisting()
        await browser.pause(5000);
    })

    it('Success Add to Cart on Detail Page', async () => {
        await DetailPage.addToCart.click()
        await InventoryPage.assertBadges()
        await browser.pause(5000);
    })

    it('Success Remove Product on Cart via Detail Page', async () => {
        await DetailPage.removeProduct.click()
        await InventoryPage.assertRemoveBadges();
        await browser.pause(5000);
    });

    /* after(async () => {
        await SidebarPage.menuSidebar.click()
        await SidebarPage.logout.click()
        await expect(LoginPage.btnSubmit).toBeExisting()
        await browser.pause(5000);
    });*/
})