import { getPokemon } from "./get.js";

console.log("....");

const api_url = "https://pokeapi.co/api/v2/pokemon/";

getPokemon(api_url);


for(let i=0; i<20; i++){
    getPokemon(api_url+i);
}