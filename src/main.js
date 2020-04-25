import Vue from 'vue';
import App from './App.vue';
import Layout from './components/Layout';
import router from './router';
import ScrollAnimation from './directives/scrollAnimation';
import '@/assets/scss/main.scss';

Vue.config.productionTip = false;

Vue.directive('scrollanimation', ScrollAnimation);

Vue.use(Layout);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
