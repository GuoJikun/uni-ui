import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'uni-description-item',
  styleUrl: 'uni-description-item.css',
  shadow: true,
})
export class UniDescriptionItem {
  @Prop({
    attribute: 'label',
  })
  label: string;

  @Prop({
    attribute: 'label-width',
    mutable: true,
    reflect: true,
  })
  labelWidth: string = '30%';

  @Prop({
    attribute: 'gutter',
    mutable: true,
    reflect: true,
  })
  gutter: string;

  render() {
    return (
      <Host>
        <div class="label" style={{ width: this.labelWidth }}>
          <slot name="label">{this.label}</slot>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </Host>
    );
  }
}