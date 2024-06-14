# Easyflow web components

This is my webcomponent library for my project


# How to get started
1. First you need access to this repo
2. Then you need to login to the github npm servers with npm login --registry=https://npm.pkg.github.com --scope=@easyflow-chat (for password you need to generate a personal access token in github and select npm packages read premissions)
3. When you are logged in you can download my library with npm install @easyflow-chat/easyflow-web-components
4. Import the style file from @eassyflow-chat/easyflow-web-components/dist/easyflow-web-components/easyflow-web-components.css (ugly I know)

# Typescript
For TS projects you need a ewc.d.ts file which dfines the types for the jsx/tsx files to be able to use them without errors

import { JSX } from '@dragon437619/easyflow-web-components/loader';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type StencilProps<T> = {
  [P in keyof T]?: Omit<T[P], 'ref'> | HTMLAttributes<T>;
};

type ReactProps<T> = {
  [P in keyof T]?: DetailedHTMLProps<HTMLAttributes<T[P]>, T[P]> & {
    class?: HTMLAttributes<HTMLElement>['className'];
  };
};

type StencilToReact<T = JSX.IntrinsicElements, U = HTMLElementTagNameMap> = StencilProps<T> & ReactProps<U>;

declare global {
  export namespace JSX {
    interface IntrinsicElements extends StencilToReact {}
  }
}

declare module '*.module.css';
declare module '*.svg';
