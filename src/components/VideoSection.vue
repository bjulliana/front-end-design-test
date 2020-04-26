<template>
  <div class="video-section">
    <Container>
      <Row class="wrap video-section__row">
        <Column class="col-sm12 col-md8 col-lg6 align-center">
          <div v-scrollanimation:top class="video-container">
            <iframe :src="`https://www.youtube.com/embed/${videoID}?&loop=1&playlist=${videoID};rel=0&controls=1&autoplay=1&mute=1&start=0`" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:0"></iframe>
          </div>
        </Column>
      </Row>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'VideoSection',
  data: function() {
    return {
      videoID: 'u31qwQUeGuM',
    };
  },
};
</script>

<style scoped lang="scss">
.video-section {
  background-color: set-color('default');

  &__row {
    padding: $spacer-5xl 0;

    @include breakpoint('lg-and-up') {
      padding: $spacer-6xl 0;
    }
  }

  .video-container {
    overflow: hidden;
    position: relative;
    width: 100%;

    &::after {
      padding-top: 56.25%;
      display: block;
      content: '';
    }

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
