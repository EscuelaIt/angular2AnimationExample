import { AnimationNGPage } from './app.po';

describe('animation-ng App', function() {
  let page: AnimationNGPage;

  beforeEach(() => {
    page = new AnimationNGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
