/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface EwcButton {
        /**
          * If the button is disabled
         */
        "disabled": boolean;
        /**
          * Focuses the button
         */
        "doFocus": () => Promise<void>;
        /**
          * The label of the button
         */
        "label": string;
        /**
          * If the button is loading
         */
        "loading": boolean;
        /**
          * The screen reader hint for the button
         */
        "srHint": string;
        /**
          * The appearance of the button
         */
        "theme": 'primary' | 'secondary' | 'transparent';
        /**
          * The type of the button
         */
        "type": 'button' | 'submit' | 'reset';
    }
    interface EwcButtonGroup {
        "layout": 'responsive' | 'fill' | 'responsive-reverse' | 'fullwidth';
    }
    interface EwcLoader {
        /**
          * The size of the loader
         */
        "size": number;
        /**
          * The screen reader hint for the loader
         */
        "srHint": string;
        /**
          * If the loader inherits the color of the parent element
         */
        "strokeInherit": boolean;
    }
}
declare global {
    interface HTMLEwcButtonElement extends Components.EwcButton, HTMLStencilElement {
    }
    var HTMLEwcButtonElement: {
        prototype: HTMLEwcButtonElement;
        new (): HTMLEwcButtonElement;
    };
    interface HTMLEwcButtonGroupElement extends Components.EwcButtonGroup, HTMLStencilElement {
    }
    var HTMLEwcButtonGroupElement: {
        prototype: HTMLEwcButtonGroupElement;
        new (): HTMLEwcButtonGroupElement;
    };
    interface HTMLEwcLoaderElement extends Components.EwcLoader, HTMLStencilElement {
    }
    var HTMLEwcLoaderElement: {
        prototype: HTMLEwcLoaderElement;
        new (): HTMLEwcLoaderElement;
    };
    interface HTMLElementTagNameMap {
        "ewc-button": HTMLEwcButtonElement;
        "ewc-button-group": HTMLEwcButtonGroupElement;
        "ewc-loader": HTMLEwcLoaderElement;
    }
}
declare namespace LocalJSX {
    interface EwcButton {
        /**
          * If the button is disabled
         */
        "disabled"?: boolean;
        /**
          * The label of the button
         */
        "label"?: string;
        /**
          * If the button is loading
         */
        "loading"?: boolean;
        /**
          * The screen reader hint for the button
         */
        "srHint"?: string;
        /**
          * The appearance of the button
         */
        "theme"?: 'primary' | 'secondary' | 'transparent';
        /**
          * The type of the button
         */
        "type"?: 'button' | 'submit' | 'reset';
    }
    interface EwcButtonGroup {
        "layout"?: 'responsive' | 'fill' | 'responsive-reverse' | 'fullwidth';
    }
    interface EwcLoader {
        /**
          * The size of the loader
         */
        "size"?: number;
        /**
          * The screen reader hint for the loader
         */
        "srHint"?: string;
        /**
          * If the loader inherits the color of the parent element
         */
        "strokeInherit"?: boolean;
    }
    interface IntrinsicElements {
        "ewc-button": EwcButton;
        "ewc-button-group": EwcButtonGroup;
        "ewc-loader": EwcLoader;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ewc-button": LocalJSX.EwcButton & JSXBase.HTMLAttributes<HTMLEwcButtonElement>;
            "ewc-button-group": LocalJSX.EwcButtonGroup & JSXBase.HTMLAttributes<HTMLEwcButtonGroupElement>;
            "ewc-loader": LocalJSX.EwcLoader & JSXBase.HTMLAttributes<HTMLEwcLoaderElement>;
        }
    }
}
