import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/cpl-home/cpl-home.view.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
