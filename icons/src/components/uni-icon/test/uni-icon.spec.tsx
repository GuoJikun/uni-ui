import { newSpecPage } from '@stencil/core/testing';
import { UniIcon } from '../uni-icon';

describe('uni-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniIcon],
      html: `<uni-icon></uni-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-icon>
    `);
  });
});
