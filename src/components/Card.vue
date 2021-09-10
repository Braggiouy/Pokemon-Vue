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
      <div class="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
        <h1 class="text-white">Profile</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>

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
            <h1 class="text-gray-500 text-xs">Spent</h1>
            <h1 class="text-gray-600 text-sm">$2,004</h1>
          </div>
        </div>
        <div class="w-full h-1/2 flex flex-col justify-center items-center">
          <h1 class="text-gray-700 font-bold">Maria R.</h1>
          <h1 class="text-gray-500 text-sm">New York, USA</h1>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  name: "Card",
  data: function () {
    return {
      name: "PIKACHU",
    };
  },
};
</script>

<style scoped>
/* .card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 10px solid #ffd828;
  margin: 10px;
  padding: 5px;
  background-color: #f7dcaf;
  border-radius: 5px;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  width: 250px;
  height: 300px;
} */
</style>
