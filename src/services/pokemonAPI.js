import axios from "axios";

async function pokemonsList() {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export default pokemonsList;
