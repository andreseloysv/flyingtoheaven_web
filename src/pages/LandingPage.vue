<template>
  <section class="hero">
    <div class="hero__wrapper">
      <div class="hero__update-bg">
        <div class="hero__update-manu">
          <span
            style="
              transition: width 650ms cubic-bezier(0.86, 0, 0.07, 1) 0s;
              width: 100%;
            "
            ><img
              src="/img/manu.png"
              height="677"
              alt=""
              style="width: 100%; height: auto"
          /></span>
        </div>
        <div class="hero__update-logo">
          <span
            style="
              transition: width 650ms cubic-bezier(0.86, 0, 0.07, 1) 0s;
              width: 100%;
            "
            ><img
              src="/img/hero_logo.png"
              height="400"
              alt="flying to heaven"
              style="width: 100%; height: auto"
          /></span>
        </div>
      </div>
      <div class="hero-info">
        <div class="hero-info__body">
          <div class="hero-appstore-btn">
            <a
              href="https://itunes.apple.com/es/app/id1145275343"
              target="_blank"
              ><span></span
            ></a>
          </div>
          <div class="hero-googleplay-btn">
            <a
              href="https://play.google.com/store/apps/details?id=com.MarmotaStudios.FlyingToHeaven"
              target="_blank"
              ><span></span
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";
import { useMeta } from "vue-meta";

export default defineComponent({
  name: "LandingPage",
  props: ["msg"],
  setup(props: any) {
    const searchInput = ref();
    let post = ref("");
    let credential = ref("");
    let user: any = ref({});

    async function newPostEvent() {
      console.log("Reload Landing");
    }

    const { meta } = useMeta({});

    return {
      post,
      user,
      newPostEvent,
    };
  },
});
</script>

<style lang="stylus" scoped>
.hero
  width 100%
  position relative

.hero__wrapper
  width 100%
  padding-top 50.97222%
  position relative
  border-bottom #FFF 3px solid

.hero__update-bg
  position absolute
  left 0
  top 0
  background url( '../img/hero_bg_update.jpg' ) 0 0 no-repeat
  -webkit-background-size cover
  background-size cover
  width 100%
  padding-top 50.9722%

.hero__update-logo
  position absolute
  left 21.9%
  top 50%
  margin-top -20%
  width 27.778%
  z-index 2

.hero__update-manu
  position absolute
  left 55.8%
  top 55%
  margin-top -28.8%
  width 23.9319%
  z-index 3

.hero-info
  width 100%
  background rgba( 0, 0, 0, 0.7 )
  position absolute
  left 0
  bottom 20%

  .hero-info__body
    margin-left auto
    margin-right auto
    box-sizing border-box
    max-width 1000px
    padding-left 20px
    padding-right 20px
    position relative

    .hero-appstore-btn
      display none
      position absolute
      left 50%
      top 30%
      width 19.8%
      margin-left -28.1%

      & span
        display block
        width 100%
        background url( '/img/hero_btn_appstore_pc.png' ) 0 0 no-repeat
        -webkit-background-size cover
        background-size cover

        &::before
          content ''
          display block
          padding-top 29.598%

    .hero-googleplay-btn
      position absolute
      left 50%
      top 30%
      width 19.8%
      margin-left -7.2%
      z-index 10

      & span
        display block
        width 100%
        background url( '/img/hero_btn_googleplay_pc.png' ) 0 0 no-repeat
        -webkit-background-size cover
        background-size cover

        &::before
          content ''
          display block
          padding-top 29.598%

@media ( max-width 759px )
  .hero__wrapper
    width 100%
    padding-top 152.6667%
    position relative
    border-bottom #FFF 3px solid

  .hero__update-bg
    position absolute
    left 0
    top 0
    background url( '../img/hero_bg_update.jpg' ) 0 0 no-repeat
    -webkit-background-size cover
    background-size cover
    width 100%
    padding-top 152.6667%

  .hero__update-manu
    position absolute
    left 45.8%
    top 15.8%
    width 68.7333%
    z-index 3

  .hero__update-logo
    position absolute
    left -0.8%
    top 34.6%
    width 57.3333%
    z-index 5

  .hero-info
    .hero-info__body
      .hero-googleplay-btn
        position absolute
        text-align center
        top 30%
        width 43.8%
        left 0
        right 0
        margin auto
</style>
