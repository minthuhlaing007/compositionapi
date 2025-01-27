<template>
  <h1>Details {{ id }}</h1>
  <div v-if="post">
    {{ post }}
  </div>
  <div v-else>
    <p>loading...</p>
  </div>
</template>

<script>
import getPost from "@/composable/getPost";
export default {
  props: ["id"],
  setup(props) {
    let { post, error, load } = getPost(props.id);
    load();
    return { post, error };
  },
};
</script>

<style></style>
