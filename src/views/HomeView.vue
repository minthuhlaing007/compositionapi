<template>
  <div class="home">
    <div v-if="errors">
      <h2>{{ errors }}</h2>
    </div>

    <PostsList :posts="posts"></PostsList>
  </div>
</template>

<script>
import PostsList from "../components/PostsList";
import { ref } from "vue";

export default {
  components: { PostsList },
  setup() {
    let posts = ref([]);
    let errors = ref("");
    let load = async () => {
      try {
        let response = await fetch("http://localhost:3000/posts");
        if (response.status === 404) {
          throw new Error("Wrong Url 404 Error");
        }
        let datas = await response.json();
        console.log(datas);
      } catch (err) {
        errors.value = err;
      }
    };
    load();
    return { posts, errors };
  },
};
</script>
