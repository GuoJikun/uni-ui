import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'uni-arrow-down',
  styleUrl: 'uni-arrow-down.css',
  shadow: true,
})
export class UniArrowDown {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
