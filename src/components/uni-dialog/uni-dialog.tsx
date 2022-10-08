import { Component, Host, h, Prop, Method, Watch } from '@stencil/core';

@Component({
  tag: 'uni-dialog',
  styleUrl: 'uni-dialog.css',
  shadow: true,
})
export class UniDialog {
  @Prop({
    attribute: 'show',
    mutable: true,
  })
  visible: Boolean = false;

  @Watch('visible')
  visibleHandler(val, oldVal) {
    console.log(val, oldVal);
  }

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
              <button class="ivy-modal-button ivy-modal-button-cancel" onClick={close}>
                取消
              </button>
              <button class="ivy-modal-button ivy-modal-button-primary" onClick={close}>
                确定
              </button>
            </slot>
          </div>
          <div class="ivy-modal-close"></div>
        </div>
      </Host>
    );
  }
  @Method()
  async open() {
    this.visible = true;
  }
  @Method()
  async close() {
    this.visible = false;
  }
}
