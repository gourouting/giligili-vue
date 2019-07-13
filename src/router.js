import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/postvideo',
      name: 'postVideo',
      component: () => import(/* webpackChunkName: "video" */ './views/PostVideo.vue'),
    },
    {
      path: '/video/:videoID',
      name: 'showVideo',
      component: () => import(/* webpackChunkName: "video" */ './views/ShowVideo.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
