import { get } from "./modules/get.js";
import { viewHeroes } from "./modules/viewHeroes.js";

console.log("....");

const btn_marvel = document.getElementById("btn_marvel");
const btn_dc = document.getElementById("btn_dc");
const container_heroes = document.getElementById("container_heroes");
const card_heroe = document.getElementById("card_heroe").content;

const URL = "http://localhost:3000/";

btn_marvel.addEventListener("click", async () => {
  const heroes = await get(URL + "marvel");
  console.log(heroes);
  viewHeroes(heroes, card_heroe, container_heroes);
});

btn_dc.addEventListener("click", async () => {
  const heroes = await get(URL + "dc");
  console.log(heroes);
  viewHeroes(heroes, card_heroe, container_heroes);
});
