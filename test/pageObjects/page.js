const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class Page {
    /**
    * Opens a sub page of the page
    * path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(path)
    }
}

module.exports = new Page();
