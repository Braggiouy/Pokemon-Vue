<template>
  <nav
    class="
      relative
      flex flex-wrap
      items-center
      justify-between
      px-2
      py-3
      bg-green-600
      mb-3
    "
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="
          w-full
          relative
          flex
          justify-between
          lg:w-auto
          px-4
          lg:static lg:block lg:justify-start
        "
      >
        <a
          class="
            text-sm
            font-bold
            leading-relaxed
            inline-block
            mr-4
            py-2
            whitespace-nowrap
            uppercase
            text-white
          "
          href="#bruno"
        >
          PokeVue
        </a>
        <button
          class="
            cursor-pointer
            text-xl
            leading-none
            px-3
            py-1
            border border-solid border-transparent
            rounded
            bg-transparent
            block
            lg:hidden
            outline-none
            focus:outline-none
          "
          type="button"
        >
          <span class="block relative w-6 h-px rounded-sm bg-white"></span>
          <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        </button>
      </div>
      <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="nav-item">
            <a
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-white
                hover:opacity-75
              "
              href="#bruno"
            >
              <i
                class="
                  fab
                  fa-facebook-square
                  text-lg
                  leading-lg
                  text-white
                  opacity-75
                "
              />
            </a>
          </li>
          <li class="nav-item">
            <a
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-white
                hover:opacity-75
              "
              href="#bruno"
            >
              <i
                class="fab fa-twitter text-lg leading-lg text-white opacity-75"
              />
              <span class="ml-2">Twitter</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-white
                hover:opacity-75
              "
              href="#bruno"
            >
              <span class="ml-2">GitHub</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-white
                hover:opacity-75
              "
              href="#bruno"
            >
              <span class="ml-2">LinkedIn</span>
            </a>
          </li>
        </ul>
        <div
          class="
            relative
            flex
            w-full
            sm:w-7/12
            md:w-5/12
            px-4
            flex-wrap
            items-stretch
            lg:ml-auto
          "
        >
          <div class="flex">
            <span
              class="
                font-normal
                leading-snug
                flex
                text-center
                white-space-no-wrap
                border border-solid border-emerald-600
                rounded-full
                text-sm
                bg-emerald-100
                items-center
                rounded-r-none
                pl-2
                py-1
                text-emerald-800
                border-r-0
                placeholder-emerald-300
              "
            >
              <i class="fas fa-search"></i>
            </span>
          </div>
          <input
            type="text"
            class="
              px-2
              py-1
              h-8
              border border-solid border-emerald-600
              rounded-full
              text-sm
              leading-snug
              text-emerald-700
              bg-emerald-100
              shadow-none
              outline-none
              focus:outline-none
              w-full
              font-normal
              rounded-l-none
              flex-1
              border-l-0
              placeholder-black
            "
            placeholder="Search pokemon"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped></style>
