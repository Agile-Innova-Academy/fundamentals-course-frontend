import Postdata from "../helpers/postData.js";
import { USER } from "../helpers/url.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;

  let objUser = {
    id: Math.floor(Math.random() * 100),
    name,
    email,
    password,
  };

  await Postdata(USER, objUser);
});

