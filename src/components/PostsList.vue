<template>
  <h1>Post lists</h1>
  <div v-for="post in posts" :key="post.id">
    <SinglePosts :post="post"></SinglePosts>
  </div>
</template>

<script>
import SinglePosts from "./SinglePosts";
export default {
  components: {
    SinglePosts,
  },
  props: ["posts"],
  setup(props) {},
};
</script>

<style></style>
