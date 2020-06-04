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
      redirect: '/main',
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
      path: '/githublogin',
      redirect: 'main',
    },
    {
      path: '/rooms',
      component: () => import('@/views/SearchRoomsView.vue'),
    },
    {
      path: '/reservation',
      component: () => import('@/views/ReservationView.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
});

export default router;
