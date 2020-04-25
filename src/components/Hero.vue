<template>
  <div class="hero parallax" :style="{ backgroundImage: `url('${backgroundImage}')` }">
    <Container>
      <Row class="wrap padding-vertical-7xl">
        <Column class="col-sm12">
          <Row class="wrap grid-list-sm flex-align-center content-wrapper">
            <Column class="col-sm11 col-lg7 align-center content-wrapper__inner">
              <h1>{{ title }}</h1>
              <p class="h3 subheader">{{ subheader }}</p>
              <div class="button-section margin-top-md">
                <a class="button button--pill button--large button--secondary__gradient">{{ buttonText }}</a>
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
      backgroundImage: require('@/assets/images/hero-background.png'),
      title: 'Make event management a breeze',
      subheader: 'ACME Events Inc. makes making beautiful event landing pages a DIY adventure.',
      buttonText: 'Book a demo',
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
.hero {
  background-position: top;
  background-size: cover;

  .content-wrapper {
    &__inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
}
</style>
