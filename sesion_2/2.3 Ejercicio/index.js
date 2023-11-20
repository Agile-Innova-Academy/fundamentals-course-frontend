const containers = document.querySelector(".container");

const url = `https://fakestoreapi.com/products`;

//petición - promesa
const paint = async () => {
  // traer la información de la api
  const resp = await fetch(url)
    .then((resp) => resp.json())
    .then((response) => {
      return response;
    });

  console.log("siguente mostrar prodctos", resp);

  //   Pintar el producto
  containers.innerHTML = "";
  resp?.forEach((element) => {
    console.log("dentro del forEach", element, element.description);
    containers.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src=${element.image} class="card-img-top" alt="...">
        <div class="card-body">
        <h3 class="card-title">${element.title}</h3>
            <h5 class="card-title">${element.price}</h5>
            <p class="card-text">${element.description}</p>
              <p class="card-text">Personalidad: ${element.category}</p>
           
        </div>
        </div>      
      `;
  });
};

paint();
