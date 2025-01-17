<template>
  <h2>{{ post.title }}</h2>
  <h3>{{ cutPostBody }}</h3>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup(props) {
    let cutPostBody = computed(() => {
      return props.post.body.substring(0, 50) + "...";
    });
    return { cutPostBody };
  },
};
</script>

<style></style>
