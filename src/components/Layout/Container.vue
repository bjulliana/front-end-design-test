<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container',
};
</script>
<style lang="scss">
.container {
  box-sizing: border-box;
  flex: 1 1 100%;
  margin: auto;
  width: 100%;
  max-width: rem-calc(1200);
  padding: 0 $spacer-md;

  @include breakpoint('xl-and-up') {
    padding: 0;
  }

  &.full {
    max-width: 100%;
  }
}
</style>
