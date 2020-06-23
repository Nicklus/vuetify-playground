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
    // Permet de récupérer la valeur de postID dans les props du composants
    props: true,
    name: 'post',
    component: ArticlePage,
    beforeEnter: (to, from, next) => {
      console.log(`Enter in ${to.path}`);
      next();
    }
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

router.beforeEach((to, from, next) => {
  console.log(`You go to ${to.path}`);
  if (to.path === '/profile') {
    if ('OK' !== 'OK') {
      console.log(`Vous n'avez pas l'autorisation !!`);
      next(false);
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
