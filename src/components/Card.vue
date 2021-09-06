<template>
  <div id="card">
    <img src="https://www.smashbros.com/images/og/pikachu.jpg" alt="" />
    <h3>{{ pokemonType }}</h3>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    pokemonType: String,
  },
};
</script>

<style scoped>
#card {
  border: 1px solid black;
  padding: 15px;
  background-color: grey;
  border-radius: 10px;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
}
img {
  width: 150px;
  height: 150px;
}
</style>
