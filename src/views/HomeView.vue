<template>
  <div class="home">
  <PostsList :posts="posts"></PostsList>
  </div>
</template>


<script>
import PostsList from '../components/PostsList'
import { ref } from 'vue';

export default {
  components: { PostsList },
  setup() {
    let posts = ref([
      {title:'post title one',body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis, repudiandae sequi ducimus laboriosam est consequuntur voluptates. Officia repudiandae sint tempora? Quo enim deserunt accusantium obcaecati blanditiis minus, rem iusto! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam dicta soluta sapiente assumenda numquam saepe neque iusto? Corrupti accusamus nemo, sequi eum ab similique commodi ad dolore, facere rem nam.',id:1},
      {title:'post title two',body:'lorem ipsum',id:2},
    ])
    return{posts}
  },
};
</script>
