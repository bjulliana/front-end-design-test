<template>
  <div id="app">
    <div class="main">
      <Header />
      <router-view />
    </div>
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
