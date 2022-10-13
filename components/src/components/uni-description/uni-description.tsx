import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'uni-description',
  styleUrl: 'uni-description.css',
  shadow: true,
})
export class UniDescription {
  @Prop({
    attribute: 'header',
  })
  header: string;

  @Prop({
    attribute: 'border',
    mutable: true,
    reflect: true,
  })
  border: boolean = false;

  @Prop({
    attribute: 'columns',
    reflect: true,
    mutable: true,
  })
  columns: number = 3;

  @Prop({
    attribute: 'label-width',
    reflect: true,
  })
  labelWidth: string;

  @Prop({
    attribute: 'gutter',
  })
  gutter: string = '32';

  @Element() el: HTMLElement;

  render() {
    return (
      <Host border={this.border}>
        <div class="header" style={{ padding: `12px ${parseFloat(this.gutter) / 2}px` }}>
          <slot name="header">{this.header}</slot>
        </div>
        <div class="wrap">
          <slot></slot>
        </div>
      </Host>
    );
  }

  componentDidLoad() {
    const list = this.el.querySelectorAll('uni-description-item');
    console.log(list);
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      const curLabelWidth = element.getAttribute('label-width');
      // element.style.width = `calc(${(1 / this.columns) * 100}% - ${parseFloat(this.gutter)}px)`;
      element.style.width = `${(1 / this.columns) * 100}%`;
      const gutter = `${parseInt(this.gutter) / 2}px`;
      element.style.paddingLeft = gutter;
      element.style.paddingRight = gutter;
      element.setAttribute('gutter', gutter);
      if (curLabelWidth === '30%' && this.labelWidth) {
        element.setAttribute('label-width', this.labelWidth);
      }
      if (this.border) {
        element.setAttribute('border', '');
      }
      console.log(element.getAttribute('label-width'));
    }
  }
}
