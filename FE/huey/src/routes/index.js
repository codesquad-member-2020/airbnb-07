import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainView.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundView.vue'),
    },
    {
      path: '/github/oauth/callback',
      redirect: 'main',
    },
  ],
});

export default router;
