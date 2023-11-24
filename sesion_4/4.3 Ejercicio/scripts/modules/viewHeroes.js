// const card = document.getElementById("card_heroe").content;

export const viewHeroes = (data = [], card, container) => {
  container.innerHTML = "";
  console.log(card, container);

  data?.forEach((element) => {
    const { nombre, apodo, id, hitoria, imagen } = element;

    card.querySelector("img").setAttribute("src", imagen);
    card.querySelector("h1").textContent = nombre;
    card.querySelector("p").textContent = hitoria;

    const clone = document.importNode(card, true);
    container.appendChild(clone);
  });
};



