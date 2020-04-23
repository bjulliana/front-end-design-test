<template>
  <div id="app">
    <div id="nav">
      <Header msg="Welcome to Your Vue.js App" />
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';

export default {
  name: 'home',
  components: {
    Header,
  },
};
</script>

<style lang="scss"></style>
