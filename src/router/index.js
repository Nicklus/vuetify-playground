import Vue from 'vue';
import VueRouter from 'vue-router';

import AppHome from '@/views/AppHome.vue';
import AppProfile from '@/views/AppProfile';
import ArticlePage from '@/views/ArticlePage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppHome
  },
  {
    path: '/post/:postID',
    name: 'post',
    component: ArticlePage
  },
  {
    path: '/profile',
    name: 'profile',
    component: AppProfile
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
