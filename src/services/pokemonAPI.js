import axios from "axios";

export default async function pokemonsList() {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=151"
    );
    let pokemonData = [];
    pokemonData.push(
      await response.data.results.forEach((pokemon) => {
        fetchPokemonData(pokemon);
      })
    );
    console.log(pokemonData);
  } catch (error) {
    console.error(error);
  }
}

async function fetchPokemonData(pokemon) {
  let url = pokemon.url;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
