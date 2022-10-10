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
    interface UniBreadcrumb {
        "separator": string;
    }
    interface UniBreadcrumbItem {
        "blank": boolean;
        "href": string;
        "separator": string;
        "setSeparator": (val: string) => Promise<void>;
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
    interface UniDialog {
        "close": () => Promise<void>;
        "open": () => Promise<void>;
        "visible": Boolean;
    }
    interface UniDivider {
    }
    interface UniDrawer {
        "close": () => Promise<void>;
        "maskClosable": boolean;
        "open": () => Promise<void>;
        "placement": string;
        "showHeader": boolean;
        "visible": Boolean;
        "width": string;
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
export interface UniDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUniDialogElement;
}
export interface UniDrawerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUniDrawerElement;
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
    interface HTMLUniBreadcrumbElement extends Components.UniBreadcrumb, HTMLStencilElement {
    }
    var HTMLUniBreadcrumbElement: {
        prototype: HTMLUniBreadcrumbElement;
        new (): HTMLUniBreadcrumbElement;
    };
    interface HTMLUniBreadcrumbItemElement extends Components.UniBreadcrumbItem, HTMLStencilElement {
    }
    var HTMLUniBreadcrumbItemElement: {
        prototype: HTMLUniBreadcrumbItemElement;
        new (): HTMLUniBreadcrumbItemElement;
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
    interface HTMLUniDialogElement extends Components.UniDialog, HTMLStencilElement {
    }
    var HTMLUniDialogElement: {
        prototype: HTMLUniDialogElement;
        new (): HTMLUniDialogElement;
    };
    interface HTMLUniDividerElement extends Components.UniDivider, HTMLStencilElement {
    }
    var HTMLUniDividerElement: {
        prototype: HTMLUniDividerElement;
        new (): HTMLUniDividerElement;
    };
    interface HTMLUniDrawerElement extends Components.UniDrawer, HTMLStencilElement {
    }
    var HTMLUniDrawerElement: {
        prototype: HTMLUniDrawerElement;
        new (): HTMLUniDrawerElement;
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
        "uni-breadcrumb": HTMLUniBreadcrumbElement;
        "uni-breadcrumb-item": HTMLUniBreadcrumbItemElement;
        "uni-button": HTMLUniButtonElement;
        "uni-card": HTMLUniCardElement;
        "uni-collapse": HTMLUniCollapseElement;
        "uni-collapse-item": HTMLUniCollapseItemElement;
        "uni-dialog": HTMLUniDialogElement;
        "uni-divider": HTMLUniDividerElement;
        "uni-drawer": HTMLUniDrawerElement;
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
    interface UniBreadcrumb {
        "separator"?: string;
    }
    interface UniBreadcrumbItem {
        "blank"?: boolean;
        "href"?: string;
        "separator"?: string;
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
    interface UniDialog {
        "onClosed"?: (event: UniDialogCustomEvent<string>) => void;
        "onSure"?: (event: UniDialogCustomEvent<string>) => void;
        "visible"?: Boolean;
    }
    interface UniDivider {
    }
    interface UniDrawer {
        "maskClosable"?: boolean;
        "onClosed"?: (event: UniDrawerCustomEvent<any>) => void;
        "placement"?: string;
        "showHeader"?: boolean;
        "visible"?: Boolean;
        "width"?: string;
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
        "uni-breadcrumb": UniBreadcrumb;
        "uni-breadcrumb-item": UniBreadcrumbItem;
        "uni-button": UniButton;
        "uni-card": UniCard;
        "uni-collapse": UniCollapse;
        "uni-collapse-item": UniCollapseItem;
        "uni-dialog": UniDialog;
        "uni-divider": UniDivider;
        "uni-drawer": UniDrawer;
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
            "uni-breadcrumb": LocalJSX.UniBreadcrumb & JSXBase.HTMLAttributes<HTMLUniBreadcrumbElement>;
            "uni-breadcrumb-item": LocalJSX.UniBreadcrumbItem & JSXBase.HTMLAttributes<HTMLUniBreadcrumbItemElement>;
            "uni-button": LocalJSX.UniButton & JSXBase.HTMLAttributes<HTMLUniButtonElement>;
            "uni-card": LocalJSX.UniCard & JSXBase.HTMLAttributes<HTMLUniCardElement>;
            "uni-collapse": LocalJSX.UniCollapse & JSXBase.HTMLAttributes<HTMLUniCollapseElement>;
            "uni-collapse-item": LocalJSX.UniCollapseItem & JSXBase.HTMLAttributes<HTMLUniCollapseItemElement>;
            "uni-dialog": LocalJSX.UniDialog & JSXBase.HTMLAttributes<HTMLUniDialogElement>;
            "uni-divider": LocalJSX.UniDivider & JSXBase.HTMLAttributes<HTMLUniDividerElement>;
            "uni-drawer": LocalJSX.UniDrawer & JSXBase.HTMLAttributes<HTMLUniDrawerElement>;
            "uni-empty": LocalJSX.UniEmpty & JSXBase.HTMLAttributes<HTMLUniEmptyElement>;
            "uni-pager": LocalJSX.UniPager & JSXBase.HTMLAttributes<HTMLUniPagerElement>;
            "uni-tag": LocalJSX.UniTag & JSXBase.HTMLAttributes<HTMLUniTagElement>;
            "uni-timeline": LocalJSX.UniTimeline & JSXBase.HTMLAttributes<HTMLUniTimelineElement>;
            "uni-timeline-item": LocalJSX.UniTimelineItem & JSXBase.HTMLAttributes<HTMLUniTimelineItemElement>;
            "uni-tip": LocalJSX.UniTip & JSXBase.HTMLAttributes<HTMLUniTipElement>;
        }
    }
}