<template>
  <div class="header">
    <div class="row">
      <div class="col-sm12">
        <div class="row flex-align-center">
          <div class="col-sm12 col-md2">
            <img src="../assets/logo.png" alt="Generic Logo" />
          </div>
          <div class="col-sm12 offset-md7 col-md3">
            <div class="row flex-justify-end flex-align-center">
              <div class="col-sm5 flex-justify-end"><a class="button-text">Login</a></div>
              <div class="col-sm6 flex-justify-end offset-sm1"><a class="button button--pill button--small button--primary__gradient">Sign Up</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  background-color: set-color('grey-900');
  color: set-color('white');
  padding: rem-calc(20);
}
</style>
