import { browser, by, element } from 'protractor';

export class LandingPage {
    navigateTo() {
        return browser.get('/');
    }

    fillSearchForm() {
        element(by.id('destination')).sendKeys('Chennai');
        element(by.id('checkin-date')).clear();
        element(by.id('checkin-date')).sendKeys('2018-09-15');
        element(by.id('checkout-date')).clear();
        element(by.id('checkout-date')).sendKeys('2019-10-23');
        element(by.id('pAdult')).click();
        element(by.id('pChildren')).click();
        element(by.id('pRooms')).click();
    }

    clickMinusAdults() {
        element(by.id('mAdult')).click();
    }

    clickPlusAdults() {
        element(by.id('pAdult')).click();
    }

    clickMinusChildren() {
        element(by.id('mChildren')).click();
    }

    clickPlusChildren() {
        element(by.id('pChildren')).click();
    }

    clickMinusRooms() {
        element(by.id('mRooms')).click();
    }

    clickPlusRooms() {
        element(by.id('pRooms')).click();
    }

    getDestination() {
        return element(by.id('destination')).getAttribute('value');
    }

    getcheckIn() {
        return element(by.id('checkin-date')).getAttribute('value');
    }

    getcheckOut() {
        return element(by.id('checkout-date')).getAttribute('value');
    }

    getAdults() {
        return element(by.xpath('//*[@id="adults"]')).getAttribute('value');
    }

    getChildren() {
        return element(by.xpath('//*[@id="children"]')).getAttribute('value');
    }

    getRooms() {
        return element(by.xpath('//*[@id="rooms"]')).getAttribute('value');
    }
}
