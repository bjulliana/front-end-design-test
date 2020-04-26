<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer';

export default {
  name: 'home',
  components: {
    Footer,
    Header,
  },
};
</script>
