import { CleatPage } from './app.po';

describe('cleat App', () => {
  let page: CleatPage;

  beforeEach(() => {
    page = new CleatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
