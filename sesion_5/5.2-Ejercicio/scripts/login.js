import GetData from "../helpers/getData.js";
import { USER } from "../helpers/url.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;

  let data = await GetData(USER);
  console.log("entre al login", email, data);

  data?.forEach((element) => {
    if (email === element.email) {
      //----------- Guardar la información en el local para poder pintar el perfil ------//
      let dataUser = element;
      sessionStorage.setItem("infoUser", JSON.stringify(dataUser));

      form.reset();
      window.location.href = "../pages/home.html";
    }
  });
});
