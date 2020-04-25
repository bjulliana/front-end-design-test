<template>
  <div class="header padding-vertical-sm">
    <Container>
      <Row class="wrap">
        <Column class="col-sm12">
          <Row class="wrap grid-list-sm flex-align-center">
            <Column class="col-sm5 col-md6 col-lg2">
              <a href="#"><img :src="logo.src" :alt="logo.alt"/></a>
            </Column>
            <Column class="col-sm7 col-md6 offset-lg6 col-lg4">
              <div class="button-section">
                <a href="#" class="button--text text-white underline" v-html="buttonText"></a>
                <a href="#" class="button button--pill button--small button--primary__gradient cta-button" v-html="ctaText"></a>
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
      logo: {
        src: require('@/assets/logo.png'),
        alt: 'Generic Logo',
      },
      buttonText: 'Log-in<span class="sr-only"> to our application</span>',
      ctaText: 'Sign-up<span class="sr-only"> to our application</span>',
    };
  },
};
</script>

<style scoped lang="scss">
.header {
  background-color: set-color('grey-900');
  color: set-color('white');

  .button-section {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;

    .button--text {
      margin-right: $spacer-md;

      @include breakpoint('lg-and-up') {
        margin-right: $spacer-3xl;
      }
    }
  }
}
</style>
