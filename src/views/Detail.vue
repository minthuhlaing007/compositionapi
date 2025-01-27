<template>
  <div v-if="post">
    <h1>{{post.title}}</h1>
    <h3>{{post.detail}}</h3>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from "@/composable/getPost";
export default {
  components: { Spinner },
  props: ["id"],
  setup(props) {
    let { post, error, load } = getPost(props.id);
    load();
    return { post, error };
  },
};
</script>

<style></style>
