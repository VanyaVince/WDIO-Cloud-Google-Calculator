import * as unicode from "../constants/unicode.characters"
class Header {

    /**
     * web elements within the header of the cloud google side
     */
    get searchField () { return $("//input[@type='text']")};


    async searchService (name) {
        await this.searchField.click();
        await this.searchField.setValue([name, unicode.enterKeyboard]);
    }
}

export default new Header();