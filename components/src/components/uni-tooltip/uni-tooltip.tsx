import { Component, Host, h, Prop, Watch, Element } from '@stencil/core';
import { createPopper, Placement } from '@popperjs/core';

@Component({
  tag: 'uni-tooltip',
  styleUrl: 'uni-tooltip.css',
  shadow: true,
})
export class UniTooltip {
  $popper = null;
  constructor() {
    this.$popper = null;
  }

  @Prop({
    attribute: 'show',
    reflect: true,
    mutable: true,
  })
  visible: boolean = false;

  @Prop({
    attribute: 'content',
    reflect: true,
    mutable: true,
  })
  content: string = '';

  @Prop({
    attribute: 'placement',
    reflect: true,
    mutable: true,
  })
  placement: string = 'top';

  @Watch('placement')
  propPlacementHandler(val: string) {
    const flag = /^(top|right|bottom|left)(-(start|end)$)/.test(val);
    if (!flag) {
      throw new Error('theme must is top/top-start/top-end/right/right-start/right-end/bottom/bottom-start/bottom-end/left/left-start/left-end');
    }
  }

  @Prop({
    attribute: 'theme',
    reflect: true,
    mutable: true,
  })
  theme: string = 'light';

  @Watch('theme')
  propThemeHandler(val: string) {
    const flag = ['dark', 'light'].includes(val);
    if (!flag) {
      throw new Error('theme must is light/dark');
    }
  }

  @Element() el: HTMLElement;

  show() {
    // Make the tooltip visible
    this.visible = true;

    // Enable the event listeners
    if (this.$popper == null) {
      return;
    }
    this.$popper.setOptions(options => ({
      ...options,
      modifiers: [...options.modifiers, { name: 'eventListeners', enabled: true }],
    }));

    // Update its position
    this.$popper.update();
  }

  hide() {
    // Hide the tooltip
    this.visible = false;

    // Disable the event listeners
    if (this.$popper == null) {
      return;
    }
    this.$popper.setOptions(options => ({
      ...options,
      modifiers: [...options.modifiers, { name: 'eventListeners', enabled: false }],
    }));
  }

  render() {
    return (
      <Host show={this.visible}>
        <div class="uni-tooltip-ref" onMouseEnter={this.show.bind(this)} onFocus={this.show.bind(this)} onMouseLeave={this.hide.bind(this)} onBlur={this.hide.bind(this)}>
          <slot></slot>
        </div>
        <div class="ivy-tooltip-content">
          <div class="ivy-tooltip-arrow" data-popper-arrow></div>
          <div class="ivy-tooltip-text">
            <slot name="content">{this.content}</slot>
          </div>
        </div>
      </Host>
    );
  }

  componentDidLoad() {
    const ref: HTMLElement = this.el.shadowRoot.querySelector('.uni-tooltip-ref');
    const content: HTMLElement = this.el.shadowRoot.querySelector('.ivy-tooltip-content');
    const arrow: HTMLElement = this.el.shadowRoot.querySelector('.ivy-tooltip-arrow');
    if (ref && content)
      this.$popper = createPopper(ref, content, {
        placement: this.placement as Placement,
        modifiers: [
          {
            name: 'preventOverflow',
            options: {
              rootBoundary: 'document',
            },
          },
          {
            name: 'flip',
            options: {
              rootBoundary: 'document',
            },
          },
          {
            name: 'arrow',
            options: {
              element: arrow,
              padding: ({ reference, placement }) => {
                const placementList = placement.split('-');
                const mainPlacement = placementList[0];
                const secondPlacement = placementList[1] || null;
                if (['top', 'bottom'].includes(mainPlacement)) {
                  if (secondPlacement === 'start') {
                    return 16;
                  } else if (secondPlacement === 'end') {
                    return 16;
                  } else {
                    return 16;
                  }
                } else if (['left', 'right'].includes(mainPlacement)) {
                  if (secondPlacement === 'end') {
                    return reference.height - 16;
                  } else {
                    return 16;
                  }
                } else {
                  return 16;
                }
              },
            },
          },
          {
            name: 'offset',
            options: {
              offset: ({ placement }) => (/^(top)|(bottom)/.test(placement) ? [0, 8] : [8, 0]),
            },
          },
          // {
          //   name: 'applyStyles',
          //   phase: 'write',
          //   fn: ctx => {
          //     const { state } = ctx;
          //     console.log(ctx, state);
          //     console.log(getComputedStyle(state.elements.popper)['width']);
          //     const placement = state.placement;

          //     if (placement === 'top' || placement === 'bottom') {
          //       state.styles.arrow.left = '50%';
          //     }

          //     return state;
          //   },
          // },
        ],
      });
  }
}
