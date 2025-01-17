<template>
  <h1>Post Lists</h1>
    <div v-for="post in posts" :key="post.id">
       <SinglePosts :post='post'></SinglePosts>
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePosts from './SinglePosts'
export default {
  components: { SinglePosts },
props:["posts"],
setup(props){
    // object pone san myo htoke ka tal 
    // console.log(props.posts);
    // console.log(props.posts[0].title);

    onMounted(()=>{
      console.log("component mounted");
    });
    onUnmounted(()=>{
      console.log('component unmounted');
    });
    onUpdated(()=>{
      console.log('data updated...');
    })

}
}
</script>

<style>

</style>