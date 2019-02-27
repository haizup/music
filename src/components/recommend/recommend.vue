<template>
  <div class="recommend" ref="recommend">
    <scroll class="recommend-content" ref="scroll" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper">
          <slider>
            <div v-for="(item, index) in recommends" :key="index">
              <a :href="item.linkUrl">
                <!--scroll和fastclick点击事件冲突时，needsclick-->
                <img class="needsclick" @load="loadImage" :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>

        <div class="recommend-list">
          <h1 class="list-title">热门歌曲推荐</h1>
          <ul>
            <li v-for="(item, index) in discList" :key="index" class="item">
              <div class="icon">
                <img v-lazy="item.imgurl">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getRecommend, getDiscList} from 'api/recommend';
  import {ERR_OK} from 'api/config';

  export default {
    data() {
      return {
        recommends: [],
        discList: []
      };
    },
    created() {
      this._getRecommend();
      this._getDiscList();
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider;
          }
        });
      },
      _getDiscList() {
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            this.discList = res.data.list;
          }
        });
      },
      loadImage() {
        if (!this.checkLoaded) {
          this.checkLoaded = true;
          this.$refs.scroll.refresh();
        }
      }
    }
  };
</script>

<style scoped lang="stylus">
  @import "~common/stylus/variable";

  .recommend
    position: fixed;
    top: 4.4rem;
    bottom: 0;
    width: 100%;
    .recommend-content
      height: 100%;
      overflow: hidden;
      .slider-wrapper
        position: relative;
        width: 100%;
        overflow: hidden;
      .recommend-list
        .list-title
          height: 3.25rem;
          line-height: 3.25rem;
          text-align: center;
          font-size: $font-size-medium;
          color: $color-theme;
        .item
          display: flex;
          box-sizing: border-box;
          align-items: center;
          padding: 0 1rem 1rem 1rem;
          .icon
            flex: 0 0 3rem;
            width: 3rem;
            padding-right: 1rem;
            img
              width: 3rem;
              height: 3rem;
          .text
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            line-height: 1rem;
            font-size: $font-size-medium;
            overflow: hidden;
            .name
              margin-bottom: .5rem;
              color: $color-text;
            .desc
              color: $color-text-d;
      .loading-container
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
</style>
