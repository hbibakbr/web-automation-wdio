const { $ } = require('@wdio/globals')
// const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('//input[@id="user-name"]');
    }

    get inputPassword () {
        return $('//input[@id="password"]');
    }

    get btnSubmit () {
        return $('//input[@id="login-button"]');
    }

    get failedLoginMsg () {
        return $('//h3[contains(@data-test,"error") and text() = "Epic sadface: Username and password do not match any user in this service" ]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async assertFailedLoginMsg () {
        await expect(this.failedLoginMsg).toBeExisting();
        await expect(this.failedLoginMsg).toHaveText('Epic sadface: Username and password do not match any user in this service');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    /* open () {
        return super.open('login');
    } */
}

module.exports = new LoginPage();
