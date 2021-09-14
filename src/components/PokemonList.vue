<template>
  <ul class="flex flex-row flex-wrap justify-center items-center">
    <li v-for="pokemon in list" :key="pokemon" class="m-2">
      <Card
        :pokemonName="pokemon.data.name"
        :pokemonType="pokemon.data.types[0].type.name"
        :pokemonId="pokemon.data.id"
        :pokemonImage="pokemon.data.sprites.front_default"
        @keyup.enter="submitPokemon"
      />
      <p></p>
    </li>
  </ul>
</template>

<script>
import Card from "../components/Card.vue";
import pokemonAPI from "../services/pokemonAPI";

export default {
  name: "PokemonList",
  data() {
    return {
      list: [],
      searchedPokemon: "",
    };
  },
  components: {
    Card,
  },
  async created() {
    this.list = await pokemonAPI();
  },
  methods: {
    submitPokemon(pokemon) {
      this.searchedPokemon = pokemon;
    },
  },
};
</script>

<style></style>
