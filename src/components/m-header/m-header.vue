<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">音乐</h1>
    <router-link tag="div" class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style scoped lang="stylus">
  @import "~common/stylus/variable";
  @import "~common/stylus/mixin";

  .m-header
    position: relative;
    height: 2.2rem;
    text-align: center;
    font-size: 0;
    color: $color-theme;
    .icon
      display: inline-block;
      vertical-align: top;
      width: 1.5rem;
      height: 1.6rem;
      margin-top: .3rem;
      margin-right: .5em;
      bg-image('logo');
      background-size: 100% 100%;
    .text
      display: inline-block;
      vertical-align: top;
      line-height: 2.2rem;
      font-size: $font-size-large;
    .mine
      position: absolute;
      top: 0;
      right: 0;
      .icon-mine
        display: block;
        padding: .6rem;
        font-size: 1rem;
        color: $color-theme;
</style>
