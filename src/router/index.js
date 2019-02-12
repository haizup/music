import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Recommend = (resolve) => {
  import('components/recommend/recommend').then((module) => {
    resolve(module);
  });
};

const Singer = (resolve) => {
  import('components/singer/singer').then((module) => {
    resolve(module);
  });
};

const Rank = (resolve) => {
  import('components/rank/rank').then((module) => {
    resolve(module);
  });
};

const Search = (resolve) => {
  import('components/search/search').then((module) => {
    resolve(module);
  });
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      name: '推荐页面',
      path: '/recommend',
      component: Recommend
    },
    {
      name: '歌手页面',
      path: '/singer',
      component: Singer
    },
    {
      name: '排行页面',
      path: '/rank',
      component: Rank
    },
    {
      name: '搜索页面',
      path: '/search',
      component: Search
    }
  ]
});
