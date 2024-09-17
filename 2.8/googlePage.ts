import {By} from "selenium-webdriver";
import {BasePage} from "./basePage";

export class Google extends BasePage {
    searchBar: By = By.name('q');
    results: By = By.name('rcnt');
    constructor() {
        super ({url: "https://www.google.com"});
    };
    async search(searchThis: string) {
        return this.setInput(this.searchBar, `${searchThis}\n`);
    };
    async getResults() {
        return this.getText(this.results)
    };
};