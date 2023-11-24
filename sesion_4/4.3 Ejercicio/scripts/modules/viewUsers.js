export const viewUsers = (data, container) => {
  container.innerHTML = "";

  data?.forEach((element) => {
    console.log(element);
    const { nombre, edad, email, id } = element;

    container.innerHTML += `
           <tr>
            <td scope="row">${id}</td>
            <td scope="col">${nombre}</td>
            <td scope="col">${email}</td>
            <td scope="col">${edad}</td>
            <td scope="col">
             <button id=${id} type="button" class="btn btn-danger eliminar w-25">
         X
        </button>
           <button id=${id} type="button" class="btn btn-warning editar w-25">
         Edit
        </button>
            </td>
          </tr>
     `;
  });
};
