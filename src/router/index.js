import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../pages/HomePage.vue'),
  },
  {
    path: '/signup',
    name: 'SignUpPage',
    component: () => import('../pages/SignUpPage.vue'),
  },
  {
    path: '/signin',
    name: 'SignInPage',
    component: () => import('../pages/SignInPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
