import axios from "axios";

export default async function pokemonsList() {
  const arrayPokemon = Array.from(Array(50));
  const pokemonsDS = arrayPokemon.map((_, i) =>
    axios.get(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
  );
  const result = await Promise.all(pokemonsDS);
  return result;
  // try {
  // const response = await axios.get(
  //   "https://pokeapi.co/api/v2/pokemon/?limit=151"
  // );
  // await response.data.results.forEach((pokemon) => {
  // });
  //   return pokemonArray;
  // } catch (error) {
  //   console.error(error);
  // }
}
// let pokemonArray = [];

// async function fetchPokemonData(pokemon) {
//   let url = pokemon.url;
//   try {
//     const response = await axios.get(url);
//     pokemonArray.push(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// }
