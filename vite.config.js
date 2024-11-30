import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import legacy from "@vitejs/plugin-legacy"
import { VantResolver } from '@vant/auto-import-resolver';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path';


export default {
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    legacy({
      targets: ["ie>=11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    })
  ],
  base: './',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src')
      }
    ]
  },
  build: {
    chunkSizeWarningLimit: 2500,
},

};