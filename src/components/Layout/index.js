import Vue from 'vue';
import Container from './Container.vue';
import Row from './Row.vue';
import Column from './Column.vue';

const LayoutPlugin = () => {
  Vue.component('Container', Container);
  Vue.component('Row', Row);
  Vue.component('Column', Column);
};

export default LayoutPlugin;
export { Container, Row, Column };
