import { PALETAS } from "../helpers/url.js";
import ShowCard from "../modules/showCard.js";

const templateFragment = document.querySelector('#template').content;
const container = document.getElementById('containerCards');

document.addEventListener('DOMContentLoaded', async () => {
   const { data } = await axios.get(PALETAS);
      ShowCard(templateFragment, container, data)
})