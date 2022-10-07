import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'uni-dialog',
  styleUrl: 'uni-dialog.css',
  shadow: true,
})
export class UniDialog {
  render() {
    return (
      <Host>
        <div class="ivy-mask"></div>
        <div class="ivy-modal">
          <div class="ivy-modal-header">
            <slot name="header"></slot>
          </div>
          <div class="ivy-modal-content">
            <slot></slot>
          </div>
          <div class="ivy-modal-footer">
            <slot name="footer">
              <button class="ivy-modal-button ivy-modal-button-cancel">取消</button>
              <button class="ivy-modal-button ivy-modal-button-primary">确定</button>
            </slot>
          </div>
          <div class="ivy-modal-close"></div>
        </div>
      </Host>
    );
  }
}
