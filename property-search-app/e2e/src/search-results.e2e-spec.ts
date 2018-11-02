import { SearchResultsPage } from './search-results.po';

describe('Search Results', () => {
  let page: SearchResultsPage;

  beforeEach(() => {
    page = new SearchResultsPage();
  });

  it('Check Results', () => {
    page.navigateTo();
    page.fillSearchForm1();
    page.clickSearchButton();
    page.getResults().then(function (elements) {
      expect(elements.length).toEqual(1);
    });
  });

});
