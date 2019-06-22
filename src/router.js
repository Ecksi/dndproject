import Vue from 'vue';
import Router from 'vue-router';
import Landing from './views/Landing.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    {
      path: '/players',
      name: 'players',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Players.vue'),
    },
    {
      path: '/feats',
      name: 'feats',
      component: () => import('./views/Feats.vue'),
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('./views/Learn.vue'),
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('./views/Resources.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue'),
    },
  ],
});
