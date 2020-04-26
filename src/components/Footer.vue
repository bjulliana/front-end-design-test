<template>
  <div class="footer">
    <Container class="full-width">
      <Row class="wrap footer-navigation">
        <Container>
          <Row class="wrap grid-list-sm flex-align-start padding-vertical-4xl">
            <Column class="col-sm12 col-md6 col-lg2">
              <div class="footer-column">
                <p class="p1 nav-title">{{ navigation.features.title }}</p>
                <ul>
                  <li v-for="(item, index) in navigation.features.items" :key="index">
                    <a class="p1" href="#">{{ item }}</a>
                  </li>
                </ul>
              </div>
            </Column>
            <Column class="col-sm12 col-md6 offset-lg1 col-lg2">
              <div class="footer-column">
                <p class="p1 nav-title">{{ navigation.tools.title }}</p>
                <ul>
                  <li v-for="(item, index) in navigation.tools.items" :key="index">
                    <a class="p1" href="#">{{ item }}</a>
                  </li>
                </ul>
              </div>
            </Column>
            <Column class="col-sm12 col-md6 offset-lg1 col-lg2">
              <div class="footer-column">
                <p class="p1 nav-title">{{ navigation.contact.title }}</p>
                <ul>
                  <li class="item-icon" v-for="(item, index) in navigation.contact.items" :key="index">
                    <span class="contact-icon" :class="item.icon"></span>
                    <a class="p1" href="#">{{ item.title }}</a>
                  </li>
                </ul>
              </div>
            </Column>
            <Column class="col-sm12 col-md6 offset-lg1 col-lg3">
              <div class="map-wrapper">
                <iframe :src="navigation.map" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              </div>
            </Column>
          </Row>
        </Container>
      </Row>
      <Row class="wrap footer-copyright">
        <Container>
          <Row class="wrap padding-vertical-3xl">
            <Column class="col-sm12 col-md6">
              <div class="copyright-wrapper">
                <p class="p1">{{ navigation.copyright }} {{ new Date().getFullYear() }}</p>
              </div>
            </Column>
            <Column class="col-sm12 col-md6 social-wrapper">
              <div>
                <a class="social-icon" :href="social.url" v-for="(social, index) in navigation.social_media" :key="index"><span :class="social.icon"></span></a>
              </div>
            </Column>
          </Row>
        </Container>
      </Row>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentDate: new Date(),
      navigation: {
        features: {
          title: 'Features',
          items: ['Event organizer tools', 'Timer tools', 'Charity co-ordinator tools', 'Participant experience'],
        },
        tools: {
          title: 'Tools',
          items: ['Dashboard maker', 'Data & analytics', 'Email marketing tool', 'Social promotion tool'],
        },
        contact: {
          title: 'Contact',
          items: [
            {
              icon: 'fas fa-phone-alt',
              title: '1-888-555-5555',
            },
            {
              icon: 'fas fa-envelope',
              title: 'example@example.com',
            },
            {
              icon: 'fas fa-map-marker-alt',
              title: '123 Fake Street, London, ON A1B 2C3',
            },
          ],
        },
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.835307889371!2d-81.25372648452392!3d42.98174277914997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef21d8c9d59fb%3A0xa637ea9287d6c236!2s103%20King%20St%2C%20London%2C%20ON%20N6A%206K1!5e0!3m2!1sen!2sca!4v1587939886827!5m2!1sen!2sca',
        copyright: '© Copyright Acme Inc.',
        social_media: [
          {
            icon: 'fab fa-facebook-square',
            url: 'https://www.facebook.com/',
          },
          {
            icon: 'fab fa-twitter-square',
            url: 'https://twitter.com/',
          },
          {
            icon: 'fab fa-instagram',
            url: 'http://instagram.com/',
          },
        ],
      },
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.footer {
  @include breakpoint('lg-and-up') {
    position: sticky;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  .footer-navigation {
    background-color: set-color('grey-100');
  }

  .footer-copyright {
    background-color: set-color('grey-900');
    color: set-color('white');
    font-weight: 600;

    .copyright-wrapper {
      display: flex;
      align-items: center;
    }

    .social-wrapper {
      justify-content: flex-start;
      margin-top: $spacer-xs;

      @include breakpoint('md-and-up') {
        justify-content: flex-end;
        margin-top: 0;
      }

      .social-icon {
        margin-right: $spacer-lg;
        font-size: rem-calc(20);
        color: set-color('white');

        @include breakpoint('lg-and-up') {
          font-size: rem-calc(30);
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .footer-column {
    margin-bottom: $spacer-lg;

    @include breakpoint('lg-and-up') {
      margin-bottom: 0;
    }

    .nav-title {
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: $spacer-2xs;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin-bottom: $spacer-2xs;

        &:last-child {
          margin-bottom: 0;
        }

        a {
          @include transition();
          color: set-color('base');
          font-weight: 400;

          &:focus,
          &:hover {
            color: set-color('tertiary');
          }
        }

        .contact-icon {
          margin-right: $spacer-sm;
        }

        &.item-icon {
          display: flex;
          align-items: baseline;
        }
      }
    }
  }

  .map-wrapper {
    width: 100%;

    iframe {
      width: 100%;
    }
  }
}
</style>
