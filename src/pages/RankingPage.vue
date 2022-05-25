<template>
  <div class="greetings">
    <h1>Ranking</h1>

    <div class="row">
      <div class="col-xs-1">Country</div>
      <div>Position</div>
      <div>character</div>
      <div>Name</div>
      <div>Points</div>
    </div>
    <ranking-item
      v-for="(context, index) in result"
      :rankingContext="context"
      v-bind:key="index"
    ></ranking-item>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { backendUrl } from "@/globals/constans";
import { useMeta } from "vue-meta";
import RankingItem from "@/components/RankingItem.vue";
import { countries } from "@/globals/countries";

export interface RankingContext {
  id: number;
  country: string;
  position: number;
  character: string;
  name: string;
  points: number;
}
export default defineComponent({
  name: "RankingPage",
  props: ["msg"],
  components: {
    RankingItem,
  },
  methods: {},
  setup(props: any) {
    const result = ref(null);
    const loading = ref(true);
    const error = ref();
    const route = useRoute();
    let name = ref<string>("");
    const enabledGetPostsByUserQuery = ref(false);
    async function fetchData() {
      loading.value = true;
      try {
        const res = await fetch(`${backendUrl}/ranking`, {
          method: "get",
          headers: {
            "content-type": "application/json",
          },
        });

        const rankingRaw = await res.json();
        result.value = rankingRaw.map((r: RankingContext) => {
          return {
            id: r.id,
            country: countries.get(r.country),
            position: r.position,
            character: r.character ? r.character : "manu",
            name: r.name,
            points: r.points,
          };
        });
      } catch (err) {
        error.value = err;
        console.log(err);
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      name.value = route.params.name?.toString();
      enabledGetPostsByUserQuery.value = true;
      fetchData();
    });

    const { meta } = useMeta({});
    /*
    const result: RankingContext[] = [
      {
        id: 12,
        country: "germany",
        position: 10,
        character: "manu",
        name: "Don Eloy",
        points: 123,
      },
      {
        id: 10,
        country: "peru",
        position: 1,
        character: "eloy",
        name: "Vamos",
        points: 1423,
      },
    ];*/
    return {
      name,
      result,
    };
  },
});
</script>

<style lang="stylus" scoped>
h1
  font-weight 500
  font-size 2.6rem
  top -10px

.greetings h1, .greetings h3
  text-align center

.search-form
  margin 0
  text-align center

.search-input
  border-radius 8px
  border 3px #6c6c6c solid
  height 52px
  width 100%
  font-size 16px
  padding 0 14px

.search-button
  border-radius 8px
  -webkit-appearance none
  -webkit-border-radius 8px
  height 32px
  width 70px
  padding 0 14px
  background blue
  color white
  margin-left 8px
  border none
  font-weight bold

@media ( min-width 1024px )
  .greetings h1, .greetings h3
    text-align left

/* The switch - the box around the slider */
.switch
  position relative
  display inline-block
  width 60px
  height 34px

/* Hide default HTML checkbox */
.switch input
  opacity 0
  width 0
  height 0

/* The slider */
.slider
  position absolute
  cursor pointer
  top 0
  left 0
  right 0
  bottom 0
  background-color #ccc
  -webkit-transition 0.4s
  transition 0.4s

.slider:before
  position absolute
  content ''
  height 26px
  width 26px
  left 4px
  bottom 4px
  background-color white
  -webkit-transition 0.4s
  transition 0.4s

input:checked + .slider
  background-color #2196F3

input:focus + .slider
  box-shadow 0 0 1px #2196F3

input:checked + .slider:before
  -webkit-transform translateX( 26px )
  -ms-transform translateX( 26px )
  transform translateX( 26px )

/* Rounded sliders */
.slider.round
  border-radius 34px

.slider.round:before
  border-radius 50%

.footer-spacer
  height 1px
  background red
  margin 80px 0

.button-bar
  position fixed
  bottom 0
  background white
  padding 10px 0 0 0
  z-index 10
  width 100%
</style>
