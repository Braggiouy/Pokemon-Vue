<template>
  <ul class="flex flex-row flex-wrap justify-center items-center">
    <li v-for="pokemon in list" :key="pokemon.caca" class="m-2">
      <Card
        :pokemonName="pokemon.data.name"
        :pokemonType="pokemon.data.types[0].type.name"
        :pokemonId="pokemon.data.id"
        :pokemonImage="pokemon.data.sprites.front_default"
      />
      <p></p>
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
    this.list = await pokemonsList();
    console.log(this.list[0]);
  },
};
</script>

<style></style>
