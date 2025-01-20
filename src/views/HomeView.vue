<template>
  <div class="home">
    <div v-if="errors">
      <h2>{{ errors }}</h2>
    </div>
    <div v-if="posts.length > 0">
      <PostsList :posts="posts"></PostsList>
    </div>
    <div v-else>
      <h1>Loading ...</h1>
    </div>
  </div>
</template>

<script>
import PostsList from "../components/PostsList";
import getPost from "../composable/getPost";
export default {
  components: { PostsList },
  setup() {
    // composable function
    let { posts, errors, load } = getPost();
    load();
    return { posts, errors };
  },
};
</script>
