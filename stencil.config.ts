import { postcss } from '@stencil-community/postcss';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'easyflow-web-components',
  globalStyle: 'src/components/globals/scss/global.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
  plugins: [sass(), postcss({ plugins: [autoprefixer({ flexbox: 'no-2009' })] })],
};
