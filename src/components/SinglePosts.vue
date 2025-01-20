<template>
  <h2>{{ post.title }}</h2>
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
