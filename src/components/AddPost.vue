<template>
  <input
    ref="postInput"
    type="text"
    class="post-input"
    placeholder="Postea algo"
    aria-label="Post"
    v-model="post"
  />
  <input
    type="button"
    class="create-post"
    id="new-post"
    @click="newPostEvent"
  />
  <div class="emotions-container">
    <div class="emotion-container">
      <div class="emotion-option">🔥</div>
    </div>
    <div class="emotion-container">
      <div class="emotion-option">❤️</div>
    </div>
    <div class="emotion-container">
      <div class="emotion-option">💡</div>
    </div>
    <div class="emotion-container">
      <div class="emotion-option">🤮</div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";

enum postButtonSatus {
  default = "Enviar",
  LOADING = "Enviando...",
}

export default defineComponent({
  name: "AddPost",
  props: {
    user: Object,
  },
  emits: ["posted"],
  setup(props: any, { emit }) {
    let post = ref("");
    let loading;
    const createPostMutationVariables = () => ({
      variables: {
        createPostInput: {
          title: "",
          content: post.value,
          userId: props.user.id,
        },
      },
    });

    async function newPostEvent() {
      console.log("new Post text: ", post.value);
    }

    return {
      post,
      newPostEvent,
    };
  },
});
</script>

<style lang="stylus" scoped>

.post-input
  border-radius: 8px
  border: 3px #6c6c6c solid
  height 52px
  width 100%
  font-size: 16px
  padding: 0 14px

.create-post
  color: white;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0 0 10px 0 #0097f078;
  border: 1px solid #8f8f8f;
  border-radius: 16px;
  padding: 16px 32px;
  float: right;
  margin: 20px 0 0 0;
  cursor: pointer;
  background: linear-gradient(to left bottom,#08ae9e,#0aa,#00a6b5,#00a1bc,#009bc1,#0095c3,#008ec5,#1287c5,#217fc5,#3275c3,#446cbf,#5461b9);

.emotions-container
  display: flex
  & .emotion-container
      border: solid 1px black;
      width: 75px;
      height: 75px;
      border-radius: 50%;
      margin: 20px 20px 0px 0;
      box-shadow: 0 0 10px 0px #3d3d3d85;
      & .emotion-option
          font-size: 30px;
          text-align: center;
          top: 50%;
          transform: translateY(-50%);

@media only screen and (max-width: 768px)
  .emotions-container
    & .emotion-container
        width: 40px;
        height: 40px;
        margin: 25px 4px;
      & .emotion-option
          font-size: 20px;
</style>
