import { getMethod } from "./helpers/get.js";
import { mostrar_personajes, title } from "./modules/mostrar_dom.js";
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./styles/style.css";

const container = document.getElementById("container");

document.addEventListener( "DOMContentLoaded", async() => {

    try {
        const personajes = await getMethod();
        document.getElementById("title").innerHTML += title();
        mostrar_personajes( personajes, container );
    } catch ( err ) {
        console.log( err );
    }
} );
