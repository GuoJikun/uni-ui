import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'uni-icon',
  styleUrl: 'uni-icon.css',
  shadow: true,
})
export class UniIcon {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
