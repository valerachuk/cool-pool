import '@/filters/date.ts';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import Clipboard from 'v-clipboard';

Vue.config.productionTip = false;
Vue.use(Clipboard);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
