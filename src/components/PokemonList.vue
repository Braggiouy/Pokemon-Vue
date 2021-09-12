<template>
  <ul class="flex flex-row flex-wrap justify-center items-center">
    <li v-for="pokemon in list" :key="pokemon.caca" class="m-2">
      <Card :pokemonName="pokemon.name" />
      <p>{{ pokemon.url }}</p>
    </li>
  </ul>
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
  async created() {
    this.list.push(await pokemonsList());
    console.log(this.list);
  },
};
</script>

<style></style>
