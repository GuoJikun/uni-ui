/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface UniBadge {
        "isDot": boolean;
        "max": string;
        "type": string;
        "value": string;
    }
    interface UniButton {
        "type": string;
    }
    interface UniCard {
        "header": string;
    }
    interface UniCollapse {
        "active": string;
    }
    interface UniCollapseItem {
        "active": string;
        "index": string;
        "name": string;
    }
    interface UniDivider {
    }
    interface UniEmpty {
    }
    interface UniPager {
        "defaultPage": string;
        "layout": string;
    }
    interface UniTag {
        "size": string;
        "theme": string;
        "type": string;
    }
    interface UniTimeline {
        "reverse": boolean;
    }
    interface UniTimelineItem {
        "timestamp": string;
    }
    interface UniTip {
        "name": string;
        "type": string;
    }
}
export interface UniPagerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUniPagerElement;
}
declare global {
    interface HTMLUniBadgeElement extends Components.UniBadge, HTMLStencilElement {
    }
    var HTMLUniBadgeElement: {
        prototype: HTMLUniBadgeElement;
        new (): HTMLUniBadgeElement;
    };
    interface HTMLUniButtonElement extends Components.UniButton, HTMLStencilElement {
    }
    var HTMLUniButtonElement: {
        prototype: HTMLUniButtonElement;
        new (): HTMLUniButtonElement;
    };
    interface HTMLUniCardElement extends Components.UniCard, HTMLStencilElement {
    }
    var HTMLUniCardElement: {
        prototype: HTMLUniCardElement;
        new (): HTMLUniCardElement;
    };
    interface HTMLUniCollapseElement extends Components.UniCollapse, HTMLStencilElement {
    }
    var HTMLUniCollapseElement: {
        prototype: HTMLUniCollapseElement;
        new (): HTMLUniCollapseElement;
    };
    interface HTMLUniCollapseItemElement extends Components.UniCollapseItem, HTMLStencilElement {
    }
    var HTMLUniCollapseItemElement: {
        prototype: HTMLUniCollapseItemElement;
        new (): HTMLUniCollapseItemElement;
    };
    interface HTMLUniDividerElement extends Components.UniDivider, HTMLStencilElement {
    }
    var HTMLUniDividerElement: {
        prototype: HTMLUniDividerElement;
        new (): HTMLUniDividerElement;
    };
    interface HTMLUniEmptyElement extends Components.UniEmpty, HTMLStencilElement {
    }
    var HTMLUniEmptyElement: {
        prototype: HTMLUniEmptyElement;
        new (): HTMLUniEmptyElement;
    };
    interface HTMLUniPagerElement extends Components.UniPager, HTMLStencilElement {
    }
    var HTMLUniPagerElement: {
        prototype: HTMLUniPagerElement;
        new (): HTMLUniPagerElement;
    };
    interface HTMLUniTagElement extends Components.UniTag, HTMLStencilElement {
    }
    var HTMLUniTagElement: {
        prototype: HTMLUniTagElement;
        new (): HTMLUniTagElement;
    };
    interface HTMLUniTimelineElement extends Components.UniTimeline, HTMLStencilElement {
    }
    var HTMLUniTimelineElement: {
        prototype: HTMLUniTimelineElement;
        new (): HTMLUniTimelineElement;
    };
    interface HTMLUniTimelineItemElement extends Components.UniTimelineItem, HTMLStencilElement {
    }
    var HTMLUniTimelineItemElement: {
        prototype: HTMLUniTimelineItemElement;
        new (): HTMLUniTimelineItemElement;
    };
    interface HTMLUniTipElement extends Components.UniTip, HTMLStencilElement {
    }
    var HTMLUniTipElement: {
        prototype: HTMLUniTipElement;
        new (): HTMLUniTipElement;
    };
    interface HTMLElementTagNameMap {
        "uni-badge": HTMLUniBadgeElement;
        "uni-button": HTMLUniButtonElement;
        "uni-card": HTMLUniCardElement;
        "uni-collapse": HTMLUniCollapseElement;
        "uni-collapse-item": HTMLUniCollapseItemElement;
        "uni-divider": HTMLUniDividerElement;
        "uni-empty": HTMLUniEmptyElement;
        "uni-pager": HTMLUniPagerElement;
        "uni-tag": HTMLUniTagElement;
        "uni-timeline": HTMLUniTimelineElement;
        "uni-timeline-item": HTMLUniTimelineItemElement;
        "uni-tip": HTMLUniTipElement;
    }
}
declare namespace LocalJSX {
    interface UniBadge {
        "isDot"?: boolean;
        "max"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface UniButton {
        "type"?: string;
    }
    interface UniCard {
        "header"?: string;
    }
    interface UniCollapse {
        "active"?: string;
    }
    interface UniCollapseItem {
        "active"?: string;
        "index"?: string;
        "name"?: string;
    }
    interface UniDivider {
    }
    interface UniEmpty {
    }
    interface UniPager {
        "defaultPage"?: string;
        "layout"?: string;
        "onPageChange"?: (event: UniPagerCustomEvent<string>) => void;
    }
    interface UniTag {
        "size"?: string;
        "theme"?: string;
        "type"?: string;
    }
    interface UniTimeline {
        "reverse"?: boolean;
    }
    interface UniTimelineItem {
        "timestamp"?: string;
    }
    interface UniTip {
        "name"?: string;
        "type"?: string;
    }
    interface IntrinsicElements {
        "uni-badge": UniBadge;
        "uni-button": UniButton;
        "uni-card": UniCard;
        "uni-collapse": UniCollapse;
        "uni-collapse-item": UniCollapseItem;
        "uni-divider": UniDivider;
        "uni-empty": UniEmpty;
        "uni-pager": UniPager;
        "uni-tag": UniTag;
        "uni-timeline": UniTimeline;
        "uni-timeline-item": UniTimelineItem;
        "uni-tip": UniTip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "uni-badge": LocalJSX.UniBadge & JSXBase.HTMLAttributes<HTMLUniBadgeElement>;
            "uni-button": LocalJSX.UniButton & JSXBase.HTMLAttributes<HTMLUniButtonElement>;
            "uni-card": LocalJSX.UniCard & JSXBase.HTMLAttributes<HTMLUniCardElement>;
            "uni-collapse": LocalJSX.UniCollapse & JSXBase.HTMLAttributes<HTMLUniCollapseElement>;
            "uni-collapse-item": LocalJSX.UniCollapseItem & JSXBase.HTMLAttributes<HTMLUniCollapseItemElement>;
            "uni-divider": LocalJSX.UniDivider & JSXBase.HTMLAttributes<HTMLUniDividerElement>;
            "uni-empty": LocalJSX.UniEmpty & JSXBase.HTMLAttributes<HTMLUniEmptyElement>;
            "uni-pager": LocalJSX.UniPager & JSXBase.HTMLAttributes<HTMLUniPagerElement>;
            "uni-tag": LocalJSX.UniTag & JSXBase.HTMLAttributes<HTMLUniTagElement>;
            "uni-timeline": LocalJSX.UniTimeline & JSXBase.HTMLAttributes<HTMLUniTimelineElement>;
            "uni-timeline-item": LocalJSX.UniTimelineItem & JSXBase.HTMLAttributes<HTMLUniTimelineItemElement>;
            "uni-tip": LocalJSX.UniTip & JSXBase.HTMLAttributes<HTMLUniTipElement>;
        }
    }
}
