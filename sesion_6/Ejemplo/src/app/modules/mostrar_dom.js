
const mostrar_personajes = ( personajes = [], container ) => {

    container.classList.add("d-flex", "flex-wrap", "gap-4", "justify-content-center")

    personajes.forEach(({ name, image, species }) => {
        container.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src=${image} alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${species}</p>
                <a href="#" class="btn btn-primary w-100">Mas información</a>
            </div>
        </div>
        `
    });

};

const title = () => {
    return `<h1 class="text-center my-4">Personajes Rick and Morty</h1>`;
};

export {
    mostrar_personajes,
    title
}