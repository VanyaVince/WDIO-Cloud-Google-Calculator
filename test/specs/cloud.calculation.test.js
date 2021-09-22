import SearchPage from '../pageobjects/search.page';
import CloudCalculatorPage from '../pageobjects/cloud.calculator.page'
import HomePage from '../pageobjects/home.page'
import allureReporter from '@wdio/allure-reporter'


describe('Google Cloud Pricing Calculator', () => {
  it('Add to estimation', async () => {

    allureReporter.addLabel("Estimation");
    allureReporter.addSeverity("critical");

    await HomePage.open();
    await HomePage.header.searchService("calculator");
    await SearchPage.clickOnService();
    await CloudCalculatorPage.focusOnOuterFrame();
    await CloudCalculatorPage.focusOnInnerFrame();
    await CloudCalculatorPage.specifyComputeEngineInstances(2);
    await CloudCalculatorPage.selectComputeEngineMachineClass("preemptible");
    await CloudCalculatorPage.addEstimationToCalculation();
    await CloudCalculatorPage.isResultBlockDisplayed();
  });

  it('Get the home page', async () => {

    allureReporter.addSeverity("minor");

    await HomePage.open();
    // const currentURL = await browser.getUrl();
    await expect(browser).toHaveUrl("www//:example.com");
  });
});
