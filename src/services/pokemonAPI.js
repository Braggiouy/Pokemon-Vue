import axios from "axios";

export default async function pokemonsList() {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=151"
    );
    let pokemonData = [];
    await response.data.results.forEach((pokemon, pokemonData) => {
      fetchPokemonData(pokemon, pokemonData);
    });
  } catch (error) {
    console.error(error);
  }
}

async function fetchPokemonData(pokemon, pokemonData) {
  let url = pokemon.url;

  try {
    const response = await axios.get(url);
    pokemonData.push(response.data);
    console.log(pokemonData);
  } catch (error) {
    console.log(error);
  }
}
