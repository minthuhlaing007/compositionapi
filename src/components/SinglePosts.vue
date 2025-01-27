<template>
  <router-link :to="{name:'Detail', params:{id:post.id}}">
  <h2>{{ post.title }}</h2>
  </router-link>
  <p>{{ post.detail }}</p>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup(props) {},
};
</script>

<style></style>
