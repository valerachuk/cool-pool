import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import CplHome from '../views/cpl-home/cpl-home.view.vue';
import CplFormEdit from '../views/cpl-edit-pool/cpl-edit-pool.view.vue';
import CplPoolList from '../views/cpl-pool-list/cpl-pool-list.view.vue';
import CplAnswers from '../views/cpl-answers/cpl-answers.view.vue';
import CplFill from '../views/cpl-fill/cpl-fill.view.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: CplHome,
  },
  {
    path: '/new',
    name: 'New',
    component: CplFormEdit,
  },
  {
    path: '/list',
    name: 'List',
    component: CplPoolList,
  },
  {
    path: '/answers/:id',
    name: 'Answers',
    component: CplAnswers,
  },
  {
    path: '/fill',
    name: 'Fill',
    component: CplFill,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
