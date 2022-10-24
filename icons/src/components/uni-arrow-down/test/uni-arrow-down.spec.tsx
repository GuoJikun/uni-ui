import { newSpecPage } from '@stencil/core/testing';
import { UniArrowDown } from '../uni-arrow-down';

describe('uni-arrow-down', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniArrowDown],
      html: `<uni-arrow-down></uni-arrow-down>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-arrow-down>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-arrow-down>
    `);
  });
});
