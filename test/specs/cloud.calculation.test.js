import Header from '../components/header';
import SearchPage from '../pageobjects/search.page';
import CloudCalculatorPage from '../pageobjects/cloud.calculator.page'
import HomePage from '../pageobjects/home.page'

const url = "https://cloud.google.com/";


describe('Google Cloud Pricing Calculator', () => {
    it('Add to estimation', async()=> {

      await HomePage.open();
      // await browser.maximizeWindow();

      await HomePage.header.searchService("calculator");
      await SearchPage.clickOnService();
      await CloudCalculatorPage.focusOnOuterFrame();
      await CloudCalculatorPage.focusOnInnerFrame();
      await CloudCalculatorPage.specifyComputeEngineInstances(2);
      await CloudCalculatorPage.selectComputeEngineMachineClass("preemptible");
      await CloudCalculatorPage.addEstimationToCalculation();

      CloudCalculatorPage.isResultBlockDisplayed();

    });
});