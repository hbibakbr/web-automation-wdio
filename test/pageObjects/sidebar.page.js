const { $ } = require('@wdio/globals')

class SidebarPage {
    get menuSidebar () {
        return $('//button[@id="react-burger-menu-btn"]')
    }

    get logout () {
        return $('//a[contains(@id, "logout_sidebar_link") and text() = "Logout"]')
    }
}

module.exports = new SidebarPage()