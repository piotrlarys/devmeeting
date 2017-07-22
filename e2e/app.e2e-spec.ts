import { DevShopPage } from './app.po';

describe('dev-shop App', () => {
  let page: DevShopPage;

  beforeEach(() => {
    page = new DevShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
