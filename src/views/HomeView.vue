<template>
  <div class="home">
    <input type="text" v-model="search" />
    <h2>Search : {{ search }}</h2>
    <div v-for="name in filteredName" :key="name">
      <h2>{{ name }}</h2>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  setup() {
    let names = ref([
      "aung aung",
      "kyaw kyaw",
      "maung maung",
      "su su",
      "john doe",
      "alice",
      "bob",
    ]);
    let search = ref("");
    let filteredName = computed(() => {
      return names.value.filter((name) => {
        return name.includes(search.value);
      });
    });

    return { names, search, filteredName };
  },
};
</script>
