<template>
  <div class="form-section">
    <Container>
      <Row class="wrap form-section__row">
        <h2 v-scrollanimation:right class="margin-bottom-3xl">{{ title }}</h2>
        <Column class="col-sm12">
          <Row class="grid-list-2xl wrap flex-align-start">
            <Column class="col-sm12 col-lg7 col-xl6 flex-order-sm2 flex-order-lg1">
              <div v-scrollanimation:right class="form-wrapper" id="contactForm">
                <form v-if="!form.submitted" class="contact-form" @submit="checkForm" action="" method="post" novalidate>
                  <div v-if="form.allErrors.length" class="error-message">
                    <p v-html="form.messages.error"></p>
                  </div>
                  <div class="form-field" v-for="(field, index) in form.fields" :key="index" :class="{ 'field-error': field.error.length }">
                    <label :for="field.name">{{ field.label }}<span class="label-required" v-if="field.required">*</span></label>
                    <input v-model="field.value" :id="field.name" :type="field.type" :name="field.name" />
                    <div v-if="field.error.length">
                      <p class="field-error" v-for="(error, index) in field.error" :key="index">{{ error }}</p>
                    </div>
                  </div>
                  <p>
                    <input class="button button--submit button--large" type="submit" :value="form.buttonText" />
                  </p>
                </form>
                <div v-if="form.loading" class="loading-wrapper">
                  <div class="spinner-wrapper">
                    <Spinner />
                  </div>
                  <p>{{ form.loadingText }}</p>
                </div>
                <div v-if="form.success" class="success-wrapper">
                  <div class="success-image"><span class="fas fa-check"></span></div>
                  <div class="content">
                    <h3 class="h2 margin-bottom-xs">{{ form.messages.success.title }}</h3>
                    <p class="h5 subheader margin-bottom-xs">{{ form.messages.success.content }}</p>
                    <a @click="resetForm" class="button--text underline">{{ form.messages.success.buttonText }}</a>
                  </div>
                </div>
              </div>
            </Column>
            <Column class="col-sm12 col-lg5 offset-xl1 col-xl5 align-center flex-order-sm1 flex-order-lg2">
              <div v-scrollanimation:left class="image_wrapper" :style="{ backgroundImage: `url('${backgroundImage}')` }"></div>
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
  </div>
</template>

<script>
import Spinner from './Snippets/Spinner';

export default {
  name: 'FormSection',
  components: { Spinner },
  data: function() {
    return {
      backgroundImage: require('@/assets/images/event-picture.png'),
      title: 'Book a demo',
      form: {
        allErrors: [],
        submitted: true,
        loading: false,
        success: true,
        loadingText: 'Submitting...',
        fields: [
          {
            name: 'first_name',
            label: 'First name',
            type: 'text',
            required: true,
            value: null,
            error: [],
          },
          {
            name: 'last_name',
            label: 'Last name',
            type: 'text',
            required: true,
            value: null,
            error: [],
          },
          {
            name: 'email',
            label: 'Email',
            type: 'email',
            required: true,
            value: null,
            error: [],
          },
          {
            name: 'phone',
            label: 'Phone number',
            type: 'text',
            required: true,
            value: null,
            error: [],
          },
        ],
        buttonText: 'Sign Up',
        messages: {
          error: '<strong>HEADS UP!</strong> There are errors in the form below',
          success: {
            title: 'Demo request sent!',
            content: 'Someone will reach out to schedule your demo within the next 48 business hours',
            buttonText: 'Request another demo',
          },
        },
      },
    };
  },
  methods: {
    validateEmail: function(el) {
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(el);
    },
    checkForm: function(e) {
      const form = this.form;
      const fields = form.fields;
      form.allErrors = [];
      fields.forEach((field) => {
        field.error = [];
        if (field.type === 'email') {
          if (!this.validateEmail(field.value)) {
            field.error.push('Expected email format: example@example.com');
            form.allErrors.push(field);
          }
        }

        if (!field.value) {
          field.error.push(`${field.label} is required`);
          form.allErrors.push(field);
        }
      });

      if (!form.allErrors.length) {
        this.loadResponse();
      }

      e.preventDefault();
    },
    loadResponse: function() {
      let self = this;
      this.form.submitted = true;
      this.form.loading = true;
      setTimeout(function() {
        self.form.loading = false;
        self.form.success = true;
      }, 2000);
    },
    resetForm: function() {
      this.form.success = false;
      this.form.submitted = false;
    },
  },
};
</script>

<style scoped lang="scss">
.form-section {
  background-position: top;
  background-size: cover;

  &__row {
    padding: $spacer-5xl 0;

    @include breakpoint('lg-and-up') {
      padding: $spacer-8xl 0;
    }
  }

  .image_wrapper {
    height: 100%;
    width: 100%;
    min-height: rem-calc(300);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: $spacer-2xl;

    @include breakpoint('lg-and-up') {
      margin-bottom: 0;
    }
  }

  .form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
  }

  .success-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @include breakpoint('md-and-up') {
      flex-direction: row;
      align-items: flex-start;
    }

    .content {
      text-align: center;

      @include breakpoint('md-and-up') {
        text-align: left;
      }
    }

    .success-image {
      background: set-color('secondary-gradient');
      color: set-color('white');
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: $spacer-xl;
      padding: $spacer-lg;
      font-size: rem-calc(30);
      margin-bottom: $spacer-2xl;

      @include breakpoint('lg-and-up') {
        padding: $spacer-5xl;
        font-size: rem-calc(50);
        margin-bottom: 0;
      }
    }
  }

  .loading-wrapper {
    display: flex;
    align-items: center;
    font-weight: 600;

    .spinner-wrapper {
      margin-right: $spacer-lg;
    }
  }
}
</style>
