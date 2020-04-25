<template>
  <div class="content-image">
    <Container>
      <Row class="wrap content-image__row">
        <Column class="col-sm12">
          <Row class="grid-list-2xl wrap">
            <Column class="col-sm12 col-lg4 align-center">
              <div class="image_wrapper fade-in__right">
                <img :src="image.src" :alt="image.alt" />
              </div>
            </Column>
            <Column class="col-sm12 col-lg8 content-wrapper">
              <div class="content-wrapper__inner fade-in__left">
                <h2>{{ title }}</h2>
                <p>{{ content }}</p>
                <a href="#" class="button--text underline">{{ buttonText }}</a>
              </div>
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: function() {
    return {
      image: {
        src: require('@/assets/images/heart-lamps.png'),
        alt: 'Generic Logo',
      },
      title: 'Make your ticket holders happy',
      content: "A beautiful little sunset. Talent is a pursued interest. That is to say, anything you practice you can do. This is probably the greatest thing that's ever happened in my life. These things happen automatically. All you have to do is just let them happen. Just let go - and fall like a little waterfall. Nothing's gonna make your husband or wife madder than coming home and having a snow-covered dinner. Just pretend you are a whisper floating across a mountain. Zip. That easy.",
      buttonText: 'View full feature list',
    };
  },
  created() {
    window.addEventListener('scroll', this.handleParallax);
  },
  methods: {
    handleParallax() {
      const background = document.querySelector('.parallax');
      const scrolled = window.pageYOffset;
      background.style.backgroundPosition = '0% ' + (-(scrolled * 0.3) + 'px');
    },
  },
};
</script>

<style scoped lang="scss">
.content-image {
  background-position: top;
  background-size: cover;

  &__row {
    padding: $spacer-5xl 0;

    @include breakpoint('lg-and-up') {
      padding: $spacer-8xl 0;
    }
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .button--text {
      margin-top: $spacer-xs;

      @include breakpoint('lg-and-up') {
        margin-top: $spacer-xl;
      }
    }
  }
}
</style>
