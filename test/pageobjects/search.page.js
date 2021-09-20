class SearchPage {

    get searchResultItems () { return $$("//div[@class='gs-title']/a") };
    get containerWithItems () { return $("//div[@class='gsc-expansionArea']") };

    async clickOnService () {
        await this.containerWithItems.waitForDisplayed(); 
        await this.searchResultItems[0].click();
    }
}

export default new SearchPage();