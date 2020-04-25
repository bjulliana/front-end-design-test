<template>
  <div class="home">
    <Hero />
    <ContentImage />
    <VideoSection />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import ContentImage from '@/components/ContentImage.vue';
import VideoSection from '@/components/VideoSection';

export default {
  name: 'home',
  components: {
    VideoSection,
    Hero,
    ContentImage,
  },
};
</script>
