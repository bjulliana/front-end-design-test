<template>
  <div class="spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
};
</script>

<style scoped lang="scss">
@mixin animateSpinner($delay, $top, $left) {
  animation-delay: $delay;
  top: $top;
  left: $left;
}

.spinner {
  display: inline-block;
  position: relative;
  width: rem-calc(50);
  height: rem-calc(50);

  div {
    position: absolute;
    width: rem-calc(8);
    height: rem-calc(8);
    background: set-color('grey-300');
    border-radius: 50%;
    animation: spin 1s linear infinite;

    &:nth-child(1) {
      @include animateSpinner(0s, 2px, 21px);
    }

    &:nth-child(2) {
      @include animateSpinner(-0.1s, 7px, 7px);
    }

    &:nth-child(3) {
      @include animateSpinner(-0.2s, 21px, 2px);
    }

    &:nth-child(4) {
      @include animateSpinner(-0.3s, 35px, 7px);
    }

    &:nth-child(5) {
      @include animateSpinner(-0.4s, 40px, 21px);
    }

    &:nth-child(6) {
      @include animateSpinner(-0.5s, 35px, 35px);
    }

    &:nth-child(7) {
      @include animateSpinner(-0.6s, 21px, 40px);
    }

    &:nth-child(8) {
      @include animateSpinner(-0.7s, 7px, 35px);
    }
  }
}

@keyframes spin {
  0%,
  20%,
  80%,
  100% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.5);
  }
}
</style>
