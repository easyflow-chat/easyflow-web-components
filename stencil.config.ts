import { postcss } from '@stencil-community/postcss';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'easyflow-web-components',
  validatePrimaryPackageOutputTarget: true,
  validateTypes: true,
  globalStyle: 'src/components/globals/scss/global-export.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      isPrimaryPackageOutputTarget: true,
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
  plugins: [
    sass({
      injectGlobalPaths: ['src/components/globals/scss/global.scss'],
    }),
    postcss({
      plugins: [autoprefixer({ flexbox: 'no-2009' })],
    }),
  ],
  extras: {
    enableImportInjection: true,
  },
};
