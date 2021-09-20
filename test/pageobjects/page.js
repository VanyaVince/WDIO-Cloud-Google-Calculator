import Header from "../components/header";
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    get header () { return Header};
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async open (path) {
        await browser.url(`https://cloud.google.com//${path}`)
        await browser.maximizeWindow();
    }

    async switchToFrame (frame) {
        await frame.waitForExist();
        await browser.switchToFrame(frame);
    }
}
