import { NgAppClientPage } from './app.po';

describe('ng-app-client App', () => {
  let page: NgAppClientPage;

  beforeEach(() => {
    page = new NgAppClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
