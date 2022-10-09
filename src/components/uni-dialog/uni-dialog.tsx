import { Component, Host, h, Prop, Method, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'uni-dialog',
  styleUrl: 'uni-dialog.css',
  shadow: true,
})
export class UniDialog {
  @Prop({
    attribute: 'show',
    mutable: true,
    reflect: true,
  })
  visible: Boolean = false;

  @Watch('visible')
  visibleHandler(val, oldVal) {
    console.log(val, oldVal);
  }

  @Event() closed: EventEmitter<string>;
  closeHandler(type: string) {
    this.closed.emit(type);
  }

  render() {
    return (
      <Host show={this.visible}>
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
              <button class="ivy-modal-button ivy-modal-button-cancel" onClick={this.cancel.bind(this)}>
                取消
              </button>
              <button class="ivy-modal-button ivy-modal-button-primary" onClick={this.cancel.bind(this)}>
                确定
              </button>
            </slot>
          </div>
          <div class="ivy-modal-close" onClick={this.close.bind(this)}></div>
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
    console.log(111, this.visible);
    this.closeHandler('close');
    this.visible = false;
  }

  cancel() {
    console.log(111, this.visible);
    this.closeHandler('cancel');
    this.visible = false;
  }
}
