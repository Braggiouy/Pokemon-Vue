<template>
  <div class="Home">
    <NavBar />
    <PokemonList />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import PokemonList from "@/components/PokemonList";
export default {
  name: "Home",
  components: {
    NavBar,
    PokemonList,
  },
};
</script>
