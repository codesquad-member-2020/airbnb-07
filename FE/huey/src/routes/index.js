import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/deployTest/vue/index.html',
      redirect: '/',
    },
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
      path: '/github/oauth/callback',
      redirect: 'main',
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundView.vue'),
    },
    {
      path: '/rooms',
      component: () => import('@/views/SearchRoomsView.vue'),
    },
  ],
});

export default router;
