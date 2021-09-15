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
      const searchedItems = await $$("//div[@class='gs-title']/a");
      await searchedItems[0].click();
      console.log("click is performed");

      // await browser.pause(5000);
      
      const outerFrame = await $("//article[@id='cloud-site']//iframe");
      await outerFrame.waitForExist();
      await browser.switchToFrame(outerFrame);

      const innerFrame = await $("#myFrame");
      await innerFrame.waitForExist();
      await browser.switchToFrame(innerFrame);

      const instance = await $("//input[contains(@ng-model, 'quantity')]");
      await instance.setValue("2");

      const machineClassButton = await $("//md-select[contains(@aria-label, 'VM')]//span[contains(@class, 'icon')]");
      await machineClassButton.click();

      const machineClass = await $("//div[contains(@class, 'md-active')]//md-option[@value='preemptible']");
      await machineClass.click();

      const addToExtimationButton = await $("//form[@name='ComputeEngineForm']//button[contains(@aria-label, 'Add to Estimate')]");
      await addToExtimationButton.click();

      const saveEstimateButton = await $("//button[contains(@aria-label, 'Save Estimate')]");
      await saveEstimateButton.click();




      // const htmlTag = await $('//html').getHTML();
      // console.log(htmlTag);


      // await $("//div[@class='search-holder']").waitForDisplayed();

    //   await searchedItems.forEach(async(el)=> {
    //     await el.click();
    //     console.log("click is performed")
    //     return;
    //   });
    //   await searchedItems[0].click();
    
      // await browser.pause(8000);
    //   expect(devsiteSearch).toHaveAttribute('search-active');
    //   await expect(devsiteSearch).toContainEqual("true");
      
    //   await browser.pause(10000);
    const resultBlock = await $("//md-card-content[@id='resultBlock']");
    expect(resultBlock).toBeDisplayed();

    });
});