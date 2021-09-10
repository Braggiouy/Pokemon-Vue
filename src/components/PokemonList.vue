<template>
  <div class="flex flex-row flex-wrap justify-center items-center">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import pokemonsList from "../services/pokemonAPI";

export default {
  name: "PokemonList",
  data() {
    return {
      list: [],
    };
  },
  components: {
    Card,
  },
  created() {
    console.log(pokemonsList());
  },
};
</script>

<style></style>
