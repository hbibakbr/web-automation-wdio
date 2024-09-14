const { $ } = require('@wdio/globals')

class OverviewPage {

    get overviewPageTitle () {
        return $('//span[contains(@data-test,"title") and text() = "Checkout: Overview"]')
    }

    get productName () {
        return $('//div[contains(@data-test,"inventory-item-name") and text()="Sauce Labs Backpack"]')
    }

    get btnCancel () {
        return $('//button[contains(@id,"cancel") and text() = "Cancel"]')
    }

    get btnFinish () {
        return $('//button[@id="finish"]')
    }
}

module.exports = new OverviewPage()