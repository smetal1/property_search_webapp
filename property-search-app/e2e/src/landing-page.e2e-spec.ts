import { LandingPage } from './landing-page.po';

describe('Search Form', () => {
  let page: LandingPage;

  beforeEach(() => {
    page = new LandingPage();
  });

  it('Fill the Search Form', () => {
    page.navigateTo();
    page.fillSearchForm();
  });

  it('Check Destination', () => {
    page.getDestination().then(function (value) {
      expect(value).toEqual('Chennai');
    });
  });

  it('Check Check In', () => {
    page.getcheckIn().then(function (value) {
      expect(value).toEqual('2018-09-15');
    });
  });

  it('Check Check Out', () => {
    page.getcheckOut().then(function (value) {
      expect(value).toEqual('2019-10-23');
    });
  });

  it('Check Adults', () => {
    page.getAdults().then(function (value) {
      expect(value).toEqual('2');
    });
  });

  it('Check Children', () => {
    page.getChildren().then(function (value) {
      expect(value).toEqual('1');
    });
  });

  it('Check Rooms', () => {
    page.getRooms().then(function (value) {
      expect(value).toEqual('2');
    });
  });

  it('Check Max. Adults Limit', () => {
    for (let i = 0; i < 22; i++) {
      page.clickPlusAdults();
    }
    expect(page.getAdults()).toEqual('20');
  });

  it('Check Min. Adults Limit', () => {
    for (let i = 0; i < 22; i++) {
      page.clickMinusAdults();
    }
    expect(page.getAdults()).toEqual('1');
  });

  it('Check Max. Children Limit', () => {
    for (let i = 0; i < 23; i++) {
      page.clickPlusChildren();
    }
    expect(page.getChildren()).toEqual('20');
  });

  it('Check Min. Children Limit', () => {
    for (let i = 0; i < 23; i++) {
      page.clickMinusChildren();
    }
    expect(page.getChildren()).toEqual('0');
  });

  it('Check Max. Rooms Limit', () => {
    for (let i = 0; i < 11; i++) {
      page.clickPlusRooms();
    }
    expect(page.getRooms()).toEqual('9');
  });

  it('Check Min. Rooms Limit', () => {
    for (let i = 0; i < 11; i++) {
      page.clickMinusRooms();
    }
    expect(page.getRooms()).toEqual('1');
  });
});
