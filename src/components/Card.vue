<template>
  <span class="m-5">
    <div class="h-56 w-72 absolute flex justify-center items-center">
      <img
        class="object-cover h-20 w-20 rounded-full"
        src="https://www.smashbros.com/images/og/pikachu.jpg"
        alt=""
      />
    </div>

    <div
      class="h-56 mx-4 w-5/6 bg-blue-400 rounded-3xl shadow-md sm:w-80 sm:mx-0"
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
        "
      >
        <div class="w-full h-1/2 flex justify-between items-center px-3 pt-2">
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-gray-500 text-xs">Orders</h1>
            <h1 class="text-gray-600 text-sm">340</h1>
          </div>
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-gray-500 text-xs">POKEMON TYPE</h1>
          </div>
        </div>
        <div class="w-full h-1/2 flex flex-col justify-center items-center">
          <h1 class="text-gray-700 font-bold">{{ pokemonName }}</h1>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  name: "Card",
  props: ["pokemonName"],
  data: function () {
    return {};
  },
};
</script>

<style scoped></style>
