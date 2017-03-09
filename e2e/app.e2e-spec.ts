import { ChartReportPage } from './app.po';

describe('chart-report App', function() {
  let page: ChartReportPage;

  beforeEach(() => {
    page = new ChartReportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
