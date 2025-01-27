import { ref } from "vue";

let getPosts = () => {
  let posts = ref([]);
  let errors = ref("");
  let load = async () => {
    try {
      let response = await fetch("http://localhost:3000/posts");
      if (response.status === 404) {
        throw new Error("Wrong Url 404 Error");
      }
      let datas = await response.json();
      posts.value = datas;
    } catch (err) {
      errors.value = err.message;
    }
  };
  return { posts, errors, load };
};
export default getPosts;
