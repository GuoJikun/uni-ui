import { newE2EPage } from '@stencil/core/testing';

describe('uni-arrow-down', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-arrow-down></uni-arrow-down>');

    const element = await page.find('uni-arrow-down');
    expect(element).toHaveClass('hydrated');
  });
});
