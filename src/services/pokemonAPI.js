import axios from "axios";

export default async function pokemonsList() {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
