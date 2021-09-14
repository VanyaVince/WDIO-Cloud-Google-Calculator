const url = "https://cloud.google.com/";

describe('Google Cloud Pricing Calculator', () => {
    it('Add to estimation', async()=> {

      await browser.url(url);
      await expect(browser).toHaveUrl(url);

      const input = $("//input[@type='text']");
      await input.click();

      await browser.waitUntil(async ()=> {
          return await $("//devsite-search").getAttribute('search-active') != undefined;
      });

      console.log("attribute found");
      
      await input.setValue(["calculator", "\uE007"]);


      await browser.waitUntil(async ()=> {
        return await $("//div[@class='gsc-resultsbox-visible']").waitForDisplayed();
    });
      const searchedItems = $$("//div[@class='gs-title']/a");
      await searchedItems[0].click();
      console.log("click is performed");

    //   await searchedItems.forEach(async(el)=> {
    //     await el.click();
    //     console.log("click is performed")
    //     return;
    //   });
    //   await searchedItems[0].click();
    
      await browser.pause(8000);
    //   expect(devsiteSearch).toHaveAttribute('search-active');
    //   await expect(devsiteSearch).toContainEqual("true");
      
    //   await browser.pause(10000);
    });
});