// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import fastclick from 'fastclick';
import VueLazyload from 'vue-lazyload';
import components from 'base/index';

import 'common/stylus/index.styl';

// 使用懒加载
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
});

// 去除点击事件300ms的延迟
fastclick.attach(document.body);

Vue.config.productionTip = false;
Vue.use(components);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
