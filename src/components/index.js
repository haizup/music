import MHeader from './m-header/m-header';
import Tab from './tab/tab';

function plugin(Vue) {
  Vue.component('MHeader', MHeader);
  Vue.component('Tab', Tab);
}

export default plugin;
