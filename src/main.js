import './set-public-path';
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

Vue.config.productionTip = false;

const containerSelector = '#appOne-placeholder'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    el: containerSelector
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

export const devtools = {
  overlays: {
    selectors: [
      containerSelector
    ],
  }
};
