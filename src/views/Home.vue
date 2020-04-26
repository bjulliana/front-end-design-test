<template>
  <div class="home">
    <Hero />
    <ContentImage />
    <VideoSection />
    <FormSection />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import ContentImage from '@/components/ContentImage.vue';
import VideoSection from '@/components/VideoSection';
import FormSection from '../components/FormSection';

export default {
  name: 'home',
  components: {
    FormSection,
    VideoSection,
    Hero,
    ContentImage,
  },
};
</script>
