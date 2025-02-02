<template>
  <div class="home">
    <div v-if="errors">
      <h2>{{ errors }}</h2>
    </div>
    <div v-if="posts.length > 0" class="layout">
      <div>
      <PostsList :posts="posts"></PostsList>
      </div>
      <div>
      <TagCloud></TagCloud>
      </div>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import PostsList from "../components/PostsList";
import getPosts from "../composable/getPosts";
export default {
  components: {
    TagCloud,
    Spinner, PostsList },
  setup() {
    // composable function; destructuring lote pay tar
    let { posts, errors, load } = getPosts();
    load();
    return { posts, errors };
  },
};
</script>

<style>
.home{
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout{
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap:20px;
}
</style>
