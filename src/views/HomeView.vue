<template>
  <div class="home">
    <h1>Person One</h1>
    <h3>{{ personOne.name }} -- {{ personOne.age }}</h3>
    <button @click="changeOne">Change one</button>
    <h1>Person Two</h1>
    <h3>{{ personTwo.name }} -- {{ personTwo.age }}</h3>
    <button @click="changeTwo">Change two</button>
    <br />
    <br />
    <h1>User One</h1>
    <h3>{{ userOne }}</h3>
    <button @click="changeUserOne">change user one</button>
    <h1>User Two</h1>
    <h3>{{ userTwo }}</h3>
    <button @click="changeUserTwo">change user two</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  setup() {
    let personOne = ref({ name: "kyaw kyaw", age: 22 });
    let changeOne = () => {
      personOne.value.name = "john doe";
    };

    // ref ko tone mal so yin value ko target lote mha tar mi late mal reactive ko tone mal so yin top tan khaw loa ya tal for example( ref = user.value.name, reactive = user.name)
    let personTwo = reactive({ name: "hlaing min than", age: 11 });
    let changeTwo = () => {
      personTwo.name = "aung aung";
    };

    // ---------------------------------------------------------------------------------------------------

    let userOne = ref("hlaingminthan");
    let changeUserOne = () => {
      userOne.value = "change hmt";
    };

    // reactive so tat function ka object tway array tway mar bae a lote lote par tal ; primitive value ko reactive lote loa ma ya buu ; primitive(String,number,boolean);
    let userTwo = reactive("aung aung");
    let changeUserTwo = () => {
      userTwo = "change aa";
    };

    return {
      personOne,
      changeOne,
      personTwo,
      changeTwo,
      userOne,
      userTwo,
      changeUserOne,
      changeUserTwo,
    };
  },
};
</script>
