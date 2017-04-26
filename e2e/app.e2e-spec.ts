import { VisumenuPage } from './app.po';

describe('visumenu App', function() {
  let page: VisumenuPage;

  beforeEach(() => {
    page = new VisumenuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
