const { $ } = require('@wdio/globals')

class CheckoutPage {

    get checkoutPageTitle () {
        return $('//span[contains(@data-test,"title") and text() = "Checkout: Your Information"]')
    }

    get inputFirstname () {
        return $('//input[@id="first-name"]')
    }

    get inputLastname () {
        return $('//input[@id="last-name"]')
    }

    get inputPostalCode () {
        return $('//input[@id="postal-code"]')
    }

    btnContinue () {
        return $('//button[@id="checkout"]')
    }

    btnCancel () {
        return $('//button[contains(@id,"cancel") and text() = "Cancel"]')
    }

    msgFirstnameError () {
        return $('//h3[contains(@data-test, "error") and text() = "Error: First Name is required"]')
    }

    msgLastnameError () {
        return $('//h3[contains(@data-test, "error") and text() = "Error: Last Name is required"]')
    }

    msgPostalCodeError () {
        return $('//h3[contains(@data-test, "error") and text() = "Error: Postal Code is required"]')
    }
}

module.exports = new CheckoutPage()