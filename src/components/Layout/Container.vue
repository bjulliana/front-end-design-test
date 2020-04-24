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

  &.grid-list {
    @each $size, $gutter in $grid-gutters {
      &-#{ $size } {
        .row {
          .column {
            padding: ($gutter / 2);
            box-sizing: border-box;
          }
          &:only-child {
            margin: -($gutter / 2);
          }
          &:not(:only-child) {
            margin: auto (-#{$gutter / 2});
          }
          &*:not(:only-child) {
            .row:first-child {
              margin-top: -($gutter / 2);
            }
            .row:last-child {
              margin-bottom: -($gutter / 2);
            }
          }
        }
      }
    }
  }
}
</style>
