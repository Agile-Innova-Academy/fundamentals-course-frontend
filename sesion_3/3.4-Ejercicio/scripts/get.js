import { showPokemon } from "./show.js";

export const getPokemon = async (url) => {
  console.log("get pokemon", url);
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Los pokemones son: ", data);
    showPokemon(data);
  } catch {
    console.log("error");
  }
};
