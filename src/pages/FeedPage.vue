<template>
  <div class="greetings">hola</div>
</template>
<script lang="ts">
import FeedItem from "@/components/FeedItem.vue";
import Post from "@/components/SearchResultItem.vue";
import { ref, defineComponent } from "vue";
import AddPost from "@/components/AddPost.vue";
import { useMeta } from "vue-meta";

export default defineComponent({
  name: "FeedPage",
  props: ["msg"],
  components: {
    FeedItem,
    Post,
    AddPost,
  },
  setup(props: any) {
    const searchInput = ref();
    let post = ref("");
    let credential = ref("");
    let user: any = ref({});

    async function newPostEvent() {
      console.log("Reload feed");
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

<style lang="stylus" scoped></style>
