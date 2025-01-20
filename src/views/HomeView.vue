<template>
  <div class="home">
    <div v-for="post in posts" :key="post.id">
      <h1>{{post.title}}</h1>
      <h3>{{post.detail}}</h3>
    </div>
  </div>
</template>

<script>
import PostsList from "../components/PostsList";
import { ref } from "vue";

export default {
  components: { PostsList },
  setup() {
    let posts = ref([]);
    let load = async () => {
      try{
        let response = await fetch("http://localhost:3000/posts");
        if(response.status === 404){
          throw new Error("not found url...");
        }
        let datas = await response.json();
        posts.value = datas
      }catch(err){
        console.log(err.message);
      }
    };
    load();

    return { posts };
  },
};
</script>
