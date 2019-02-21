<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot" :class="{active: currentPageIndex === index}" v-for="(item, index) in dots"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';

  export default {
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      }
    },
    data() {
      return {
        dots: [],
        currentPageIndex: 0
      };
    },
    mounted() {
      // 浏览器渲染17ms一次
      setTimeout(() => {

      }, 20);
    },
    methods: {
      _setSliderWidth(isResize) {
        this.children = this.$refs.sliderGroup.children;

        let width = 0;
        let sliderWidth = this.$refs.slider.clientWidth;
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i];
        }
      }
    }
  };
</script>

<style scoped lang="stylus">
  @import "~common/stylus/variable";

  .slider
    min-height: 1px;
    .slider-group
      position: relative;
      overflow: hidden;
      white-space: nowrap;
      .slider-item
        float: left;
        box-sizing: border-box;
        overflow: hidden;
        text-align: center;
        a
          display: block;
          width: 100%;
          overflow: hidden;
          text-decoration: none;
        img
          display: block;
          width: 100%;
    .dots
      position: absolute;
      right: 0;
      left: 0;
      bottom: .6rem;
      text-align: center;
      font-size: 0;
      .dot
        display: inline-block;
        margin: 0 .2rem;
        width: .4rem;
        height: .4rem;
        border-radius: 50%;
        background-color: $color-text-l;
        &.active
          width: 1rem;
          border-radius: .3rem;
          background-color: $color-text-ll;
</style>
