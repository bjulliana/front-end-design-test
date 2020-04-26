<template>
  <div class="column">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Column',
};
</script>
<style lang="scss">
@each $breakpoint in $breakpoints-map {
  @for $i from 1 through $grid-columns {
    @media all and (min-width: #{map-get($breakpoints, $breakpoint)}) {
      .column.col-#{$breakpoint}#{$i} {
        display: flex;
        flex: 1 1 auto;
        width: percentage($i / $grid-columns);
        max-width: percentage($i / $grid-columns);
        min-width: 0;
      }

      .flex-order-#{$breakpoint}#{$i} {
        order: $i;
      }
    }
  }
}

@each $size, $width in $breakpoints {
  @media all and (min-width: #{$width}) {
    @for $i from 1 to $grid-columns + 1 {
      .column.offset-#{$size}#{$i} {
        margin-left: percentage($i / $grid-columns);
      }
    }
  }
}
</style>
