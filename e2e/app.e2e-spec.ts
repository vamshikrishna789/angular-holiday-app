import { AngularHolidayAppPage } from './app.po';

describe('angular-holiday-app App', () => {
  let page: AngularHolidayAppPage;

  beforeEach(() => {
    page = new AngularHolidayAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
