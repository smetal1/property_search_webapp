import { AppPage } from './app.po';

import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';
const origFn = browser.driver.controlFlow().execute;
browser.driver.controlFlow().execute = function () {
  const args = arguments;
  // queue 100ms wait
  origFn.call(browser.driver.controlFlow(), function () {
    return protractor.promise.delayed(50);
  });
  return origFn.apply(browser.driver.controlFlow(), args);
};

describe('IHG Navbar', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Check Helpline number', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('1 877 424 2449 NEED HELP?');
  });

  it('Check Navbar elements', () => {
    page.getNavOptions().then(function (elements) {
      expect(elements.length).toEqual(6);
    });
  });
});
