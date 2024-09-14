const { $ } = require('@wdio/globals')

class CartPage {
    get cartPageTitle () {
        return $('//span[contains(@data-test,"title") and text() = "Your Cart"]')
    }

    get qty () {

    }

    get btnCheckout () {
        return $('//button[@id="checkout"]')
    }

}

module.exports = new CartPage()