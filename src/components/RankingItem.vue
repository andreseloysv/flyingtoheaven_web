<template>
  <div class="row">
    <div class="col-xs-1">{{ rankingContext?.country }}</div>
    <div>{{ rankingContext?.position }}</div>
    <div>
      <img :src="`/img/${rankingContext?.character}.png`" height="40" />
    </div>
    <div>{{ rankingContext?.name }}</div>
    <div>{{ rankingContext?.points }}</div>
  </div>
</template>

<script lang="ts">
export interface RankingContext {
  id: number;
  country: string;
  position: number;
  character: string;
  name: string;
  points: number;
}
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "RankingItem",
  props: {
    rankingContext: Object,
  },
  emits: ["posted"],
  methods: {
    formatDate(dateString: string) {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("default").format(date);
    },
  },
  setup(props: any, { emit }) {
    let displayResponseBox = ref(false);
    let responseText = ref("");
    onMounted(() => {
      console.log("PostItemContext", props.postItemContext);
    });
    return {
      displayResponseBox,
      responseText,
    };
  },
});
</script>

<style lang="stylus" scoped></style>
