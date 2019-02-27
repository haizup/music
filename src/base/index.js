import MHeader from '../components/m-header/m-header';
import Tab from '../components/tab/tab';
import Slider from './slider/slider';
import Scroll from './scroll/scroll';

function plugin(Vue) {
  Vue.component('MHeader', MHeader);
  Vue.component('Tab', Tab);
  Vue.component('Slider', Slider);
  Vue.component('Scroll', Scroll);
}

export default plugin;
