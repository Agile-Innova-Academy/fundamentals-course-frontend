import { DELETE, EDIT, POST } from "./modules/crud.js";
import { get } from "./modules/get.js";
import { viewUsers } from "./modules/viewUsers.js";

console.log("usuarios js");

const form = document.getElementById("form");
const nombre = document.getElementById("inp_nombre");
const email = document.getElementById("inp_email");
const edad = document.getElementById("inp_edad");
const btn_crear = document.getElementById("btn_crear");
const btn_guardar = document.getElementById("btn_guardar");
const tbody = document.getElementById("tbody");
const URL = "http://localhost:3000/user";

// --- get-LISTAR---//
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const user = await get(URL);
    console.log(user);
    viewUsers(user, tbody);
  } catch (error) {
    console.log(error);
  }
});

//=========CREAR - POST========================
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const user = {
    nombre: nombre.value,
    email: email.value,
    edad: edad.value,
    id: crypto.randomUUID(),
  };
  console.log(user);
  POST(user, URL);
});

//=========EDITAR - PATCH========================

document.addEventListener("click", async ({ target }) => {
    console.log(target)
  if (target.classList.contains("editar")) {
    btn_crear.disabled = true;
    btn_guardar.removeAttribute("disabled");

    try {
      const user = await get(URL + `/${target.id}`);
      console.log(user);
      const { nombre: name, email: correo, edad: age } = user;

      nombre.value = name;
      email.value = correo;
      edad.value = age;

      sessionStorage.setItem("id", target.id);
    } catch (err) {
      console.log(err);
    }
  }
  if (target.classList.contains("eliminar")) {
        try {
         await DELETE(URL + `/${target.id}`);         
        } catch (err) {
          console.log(err);
        }
  }
});

//================Boton Guardar===============//
btn_guardar.addEventListener("click", () => {
  const user = {
    nombre: nombre.value,
    email: email.value,
    edad: edad.value,
  };
  EDIT(user, URL + `/${sessionStorage.getItem("id")}`);
});
