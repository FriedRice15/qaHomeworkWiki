import {By, until, WebDriver, WebElement} from 'selenium-webdriver'; 

export class SpecPage {
    driver: WebDriver; 
    url: string = 'https://www.google.com/';
    searchBar: By = By.id('APjFqb');
    results: By = By.id('a4bIc');

    constructor(driver:WebDriver) {
        this.driver = driver;
    };
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.searchBar));
    };
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element));
        return element;
    };
    async sendKeys(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy);
        await input.clear();
        return input.sendKeys(keys);
    };
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    };
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).getText();
    };
    async search(searchTerm: string) {
        return this.sendKeys(this.searchBar, `${searchTerm}\n`);
    };
    async getResults() {
        return this.getText(this.results);
    };
}; 