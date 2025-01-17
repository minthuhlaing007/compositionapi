<template>
  <div class="home">
    <h1>Composition api</h1>
    <h2>My name is {{name}}</h2>
    <p>I am {{age}} years old.</p>
    <button @click="clickHandler">Click</button>
    <br> <br>
    <input type="text" v-model="name">
    <br> <br>
    <button @click='age++'>Increase Age</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(){
    let name = ref("john doe"); // reactive value
    // console.log(name);
    let age = ref(20);
    let clickHandler=()=>{
      // reactive value ko khaw tone mal so yin value htae pay ka tal 
      name.value = "kyaw kyaw";
    }

    // data twae ko khaw tone chin yin return pyan pay ka mal
    return{name,age,clickHandler};
  }
}
</script>
