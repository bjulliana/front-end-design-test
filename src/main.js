import Vue from 'vue';
import App from './App.vue';
import Layout from './components/Layout';
import router from './router';
import '@/assets/scss/main.scss';

Vue.config.productionTip = false;

Vue.use(Layout);
// Vue.use(ScrollAnimation);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
