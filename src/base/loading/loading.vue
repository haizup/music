<template>
  <div class="loading">
    <img class="icon" src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  };
</script>

<style scoped lang="stylus">
  @import "~common/stylus/variable";

  .loading
    width: 100%;
    text-align: center;
    .icon
      width: 1.2rem;
      height: 1.2rem;
    .desc
      line-height: 1rem;
      font-size: $font-size-small;
      color: $color-text-l;
</style>
