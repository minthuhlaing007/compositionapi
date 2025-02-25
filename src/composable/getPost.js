import { db } from "@/firebase/config";
import { ref } from "vue";

let getPost = (id) => {
  let post = ref(null);
  let error = ref("");
  let load = async () => {
    try {
      let doc = await db.collection("posts").doc(id).get();
      post.value = { ...doc.data(), id: doc.id };
      // console.log(doc.data());
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};

export default getPost;
