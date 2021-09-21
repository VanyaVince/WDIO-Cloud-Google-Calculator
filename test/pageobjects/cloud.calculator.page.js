import Page from '../pageobjects/page';

class CloudCalculatorPage extends Page {

    get outerFrame () { return $("//article[@id='cloud-site']//iframe")};
    get innerFrame () { return $("#myFrame")};
    get CE_instance () { return $("//input[contains(@ng-model, 'quantity')]")};
    get CE_machineClassBtn () { return $("[ng-model='listingCtrl.computeServer.class']")};
    get CE_machineClass () {return $("//div[contains(@class, 'md-active')]")};
    get CE_AddExtimationBtn () { return $("//form[@name='ComputeEngineForm']//button[contains(@aria-label, 'Add to Estimate')]")};
    get saveExtimationBtn () { return $("//button[contains(@aria-label, 'Save Estimate')]")};
    get resultBlock () { return $("//md-card-content[@id='resultBlock']")}; 

    async selectFromDropDown(value) { 
        return $(`//div[contains(@class, 'md-active')]//md-option[@value='${value}']`);}

    async specifyComputeEngineInstances (number) {
        await this.CE_instance.setValue(number)
    }

    async addEstimationToCalculation () {
        await this.CE_AddExtimationBtn.click();
        await this.saveExtimationBtn.click();
    }

    async selectComputeEngineMachineClass (value) {
        await this.CE_machineClassBtn.click();
        await this.CE_machineClass.waitForDisplayed();
        await (await this.selectFromDropDown(value)).click();    
    }

    async focusOnOuterFrame() {
        await super.switchToFrame((await this.outerFrame));
    }

    async focusOnInnerFrame() {
        await super.switchToFrame((await this.innerFrame));
    }

    async isResultBlockDisplayed() {
        const expectResult = await this.resultBlock
        expect(expectResult).toBeDisplayed;
    }
}

export default new CloudCalculatorPage();