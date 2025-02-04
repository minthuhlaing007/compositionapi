import firebase from "firebase/app";
import "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAdXeIfHPgppgU6Glcn9REk1vbd6OWaiKk",
  authDomain: "vue-blog-system-f71cb.firebaseapp.com",
  projectId: "vue-blog-system-f71cb",
  storageBucket: "vue-blog-system-f71cb.firebasestorage.app",
  messagingSenderId: "561998832633",
  appId: "1:561998832633:web:70c452beffb3da93971328"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// database setup
let db=firebase.firestore();

export {db};