<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Row',
};
</script>
<style lang="scss">
.row {
  display: flex;
  flex-direction: row;
  position: relative;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  min-width: 0;
  width: 100%;
  &.reverse {
    flex-direction: row-reverse;
  }
  &.column {
    flex-direction: column;
    &.reverse {
      flex-direction: column-reverse;
    }
    > .column {
      max-width: 100%;
    }
  }
  &.wrap {
    flex-wrap: wrap;
  }

  &.grid-list {
    @each $size, $gutter in $grid-gutters {
      &-#{ $size } {
        > .column {
          padding: ($gutter / 3) ($gutter / 2);
          box-sizing: border-box;
        }
        &:only-child {
          margin: -($gutter / 2);
        }
        &:not(:only-child) {
          margin: auto - (#{$gutter / 2});
        }
      }
    }
  }
}
</style>
