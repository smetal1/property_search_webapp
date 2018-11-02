import { protractor } from 'protractor/built/ptor';
import { browser, by, element } from 'protractor';

export class SearchResultsPage {
    navigateTo() {
        return browser.get('/');
    }

    fillSearchForm1() {
        element(by.id('destination')).sendKeys('Chennai');
        element(by.id('checkin-date')).clear();
        element(by.id('checkin-date')).sendKeys('2018-09-15');
        element(by.id('checkout-date')).clear();
        element(by.id('checkout-date')).sendKeys('2019-10-23');
        element(by.id('pAdult')).click();
        element(by.id('pChildren')).click();
        element(by.id('pRooms')).click();
    }

    fillSearchForm2() {
        element(by.id('destination')).sendKeys('Chennai');
        element(by.id('checkin-date')).clear();
        element(by.id('checkin-date')).sendKeys('2018-09-15');
        element(by.id('checkout-date')).clear();
        element(by.id('checkout-date')).sendKeys('2018-09-15');
        element(by.id('pAdult')).click();
        element(by.id('pChildren')).click();
        element(by.id('pRooms')).click();
    }

    clickSearchButton() {
        return element(by.id('searchButton')).click();
    }

    getResults() {
        return element.all(by.css('app-search-results > div'));
    }

    getNoResults() {
        const until = protractor.ExpectedConditions;
        const elem = element(by.xpath('/html/body/app-root/app-landing-page/div[2]/div/h4'));
        browser.driver.sleep(1000);
        return elem.getText();
    }
}
