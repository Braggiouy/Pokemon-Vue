<template>
  <span class="m-5">
    <div class="h-56 w-72 absolute flex justify-center items-center">
      <img
        class="object-cover h-32 w-32 rounded-full"
        v-bind:src="pokemonImage"
        alt=""
      />
    </div>

    <div
      class="h-56 mx-4 w-5/6 bg-red-500 rounded-3xl shadow-md sm:w-80 sm:mx-0"
    >
      <div
        class="h-1/2 w-full flex justify-between items-baseline px-3 py-5"
      ></div>

      <div
        class="
          bg-white
          h-1/2
          w-full
          rounded-3xl
          flex flex-col
          justify-around
          items-center
          border-t-4 border-solid border-black
        "
      >
        <div class="w-full h-1/2 flex justify-between items-center px-3 pt-2">
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-gray-500 text-xs">Pokemon ID</h1>
            <h1 class="text-gray-600 text-sm">{{ pokemonId }}</h1>
          </div>
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-gray-500 text-xs">Pokemon type</h1>
            <h1 class="text-gray-600 text-sm">{{ pokemonType }}</h1>
          </div>
        </div>
        <div class="w-full h-1/2 flex flex-col justify-center items-center">
          <h1 class="text-gray-500 text-xs">Pokemon name</h1>
          <h1 class="text-gray-700 font-bold">
            {{
              pokemonName.charAt(0).toUpperCase() +
              pokemonName.slice(1, pokemonName.length)
            }}
          </h1>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  name: "Card",
  props: [
    "pokemonName",
    "pokemonType",
    "pokemonId",
    "pokemonImage",
    "searchedPokemon",
  ],
  data: function () {
    return {};
  },
};
</script>

<style scoped></style>
