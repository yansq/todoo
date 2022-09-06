/* eslint-env node */

import {join} from 'path';
import vue from '@vitejs/plugin-vue';
import {renderer} from 'unplugin-auto-expose';
import Unocss from 'unocss/vite';
import transformerDirective from '@unocss/transformer-directives';
import presetAttributify from '@unocss/preset-attributify';
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx';
import presetWind from '@unocss/preset-wind';
import {chrome} from '../../.electron-vendors.cache.json';

const PACKAGE_ROOT = __dirname;

/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
const config = {
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      path: 'path-browserify',
      '/@/': `${join(PACKAGE_ROOT, 'src')}/`,
    },
  },
  base: '',
  server: {
    fs: {
      strict: true,
    },
  },
  build: {
    sourcemap: true,
    target: `chrome${chrome}`,
    outDir: 'dist',
    assetsDir: '.',
    rollupOptions: {
      input: join(PACKAGE_ROOT, 'index.html'),
    },
    emptyOutDir: true,
    reportCompressedSize: false,
  },
  test: {
    environment: 'happy-dom',
  },
  plugins: [
    vue(),
    renderer.vite({
      preloadEntry: join(PACKAGE_ROOT, '../preload/src/index.ts'),
    }),
    Unocss({
      presets: [
        presetWind(),
        presetAttributify({
          /* preset options */
        }),
      ],
      transformers: [transformerDirective(), transformerAttributifyJsx()],
    }),
  ],
};

export default config;
