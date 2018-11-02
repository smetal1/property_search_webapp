import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.id('helpline')).getText();
  }

  getNavOptions() {
    return element.all(by.css('nav ul li'));
  }
}
