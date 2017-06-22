import { MapasPage } from './app.po';

describe('mapas App', () => {
  let page: MapasPage;

  beforeEach(() => {
    page = new MapasPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
