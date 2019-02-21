import MHeader from '../components/m-header/m-header';
import Tab from '../components/tab/tab';
import Slider from './slider/slider';

function plugin(Vue) {
  Vue.component('MHeader', MHeader);
  Vue.component('Tab', Tab);
  Vue.component('Slider', Slider);
}

export default plugin;
