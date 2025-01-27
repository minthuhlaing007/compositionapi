<template>
  <div class="home">
    <div v-if="errors">
      <h2>{{ errors }}</h2>
    </div>
    <div v-if="posts.length > 0">
      <PostsList :posts="posts"></PostsList>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import PostsList from "../components/PostsList";
import getPosts from "../composable/getPosts";
export default {
  components: {
    Spinner, PostsList },
  setup() {
    // composable function; destructuring lote pay tar
    let { posts, errors, load } = getPosts();
    load();
    return { posts, errors };
  },
};
</script>
