<template>
  <div class="home">
    <Hero />
    <ContentImage />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import ContentImage from '@/components/ContentImage.vue';

export default {
  name: 'home',
  components: {
    Hero,
    ContentImage,
  },
};
</script>
