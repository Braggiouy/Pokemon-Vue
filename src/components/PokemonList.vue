<template>
  <div><Card /></div>
</template>

<script>
import Card from "../components/Card.vue";
import pokemonsList from "../services/pokemonAPI";

export default {
  name: "PokemonList",
  components: {
    Card,
  },
  async mounted() {
    console.log(await pokemonsList());
  },
};
</script>

<style></style>
