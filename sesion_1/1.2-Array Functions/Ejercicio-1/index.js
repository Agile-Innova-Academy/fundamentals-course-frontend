//1- capturar el formulario (etiqueta form)
const form = document.getElementById('form')

// 2- capturar toda la informacion en algun lugar
//-crear espacio de memoria a trves de un Array vacio

let CitaMentorias = []

//3-capturar el evento submit
form.addEventListener('submit', e => {
    e.preventDefault()
    agendar()

})

//4- crear una funcion que permita capturar los datos del formulario
//capturar los datos - construir el objeto - enviarlo al localStorage

const agendar = () => {

    //capturar los daatos del formulario input - alamancenarlos en un espacio de memoria
    let nomEst = document.getElementById('nomEstud').value
    let nomMen = document.getElementById('nomMentor').value
    let email = document.getElementById('email').value
    let fecha = document.getElementById('fecha').value
    let hora = document.getElementById('hora').value


    let AgregarCita = {
        id: Math.round(Math.random() * (1000 - 1) + 1),
        nomEst,
        nomMen,
        email,
        fecha,
        hora
    }
    console.log(AgregarCita)


    //enviarla al LocalStorage
    //validar si existe una key (Agenda) exista
    // Si Agenda no existe la voy a crear Agenda
    // Si si existe yo voy enviar LocalStoge CitaMentorias (debe contener ObjetoAgregarCita)

    //5.1 validar o buscar la key
    const key = JSON.parse(localStorage.getItem('Agenda'))
    console.log(key) //veo que regresa si no esta reegresa null

    if (key == null) {
        //este no existe la key debo crearla
        //el .push agrega al final del array
        CitaMentorias.push(AgregarCita)
        localStorage.setItem('Agenda', JSON.stringify(CitaMentorias))

    }
    else {
        // Si existe y la amnejo por la key existente
        //el .unshift agrega al inicio del array
        key.unshift(AgregarCita)
        localStorage.setItem('Agenda', JSON.stringify(key))
    }

    listarLocalStorage()
}


//6 listar
//capturar la informacion de donde quiero listar

const listar = document.getElementById('listarAgenda')

//crear  una funcion para tarerme lo que tengo en Localstorage y pintarlo en la tabla 
//quee esta dentro de listar

const listarLocalStorage = () => {

    //listar la llamamos un valor vacio
    listar.innerHTML = ''

    //traerme todo lo que esta en el localStorage
    const traerArrayObjetos =JSON.parse(localStorage.getItem("Agenda"))
    console.table(traerArrayObjetos)
    //recorrer loq ue traje del localstorage con  .map
    
    traerArrayObjetos.map(array =>{
        //desestructurando el array
        const {id, nomEst,  nomMen,  email, fecha, hora}= array

        //vamos a pintar este dentro de la tabla 
        //listar
        listar.innerHTML +=`
        <td>${id}</td>
        <td>${nomEst}</td>
        <td>${nomMen}</td>
        <td>${email}</td>
        <td>${fecha}</td>
        <td>${hora}</td>
        <td>
        <button type="button" class="btn btn-danger" id =${id}>Eliminar</button>
        <button type="button" class="btn btn-success" id =${id}>Editar</button>
        <button type="button" class="btn btn-info" id =${id}>Detalle</button>
        </td>
       
        `
   })


}

//7- cargar la lista en el DOM
document.addEventListener('DOMContentLoaded', listarLocalStorage)

//8- Eliminar - 
// capturar el evento click del boton de Danger (eliminar)que esta dentro de la  tabla dentro 
//de tBody - esta listar


listar.addEventListener('click', e =>{
    console.log(e)

    // buscar si encuentra el boton btn-danger 
    const btnEliminar = e.target.classList.contains('btn-danger')
    console.log(btnEliminar)

    // traer el id
    const id = e.target.id
    console.log(id)

    //traerme todo lo que tengo en el localStoarge para poder comparar
    //si algun objeto de los que estan corresponde al id

    const traerArrayObjetos =JSON.parse(localStorage.getItem("Agenda"))

    //buscar con find que el id cumpla la condicion
    //== No es estricta con que cumpla el contenido basta
    //=== estrictamente igual, validar contenido como el tipo dato
    const buscarId = traerArrayObjetos.find(datos => datos.id === Number(id))
    console.log(buscarId)

    if(btnEliminar){
        traerArrayObjetos.forEach((lis, index)=>{
            if(lis.id === buscarId.id){
                //splice nos permite eliminar en posicion del arreglo
                //el index es la posicion y el 1 es la cantidad de elementos a eliminar
                traerArrayObjetos.splice(index, 1)
                console.log(traerArrayObjetos)
                localStorage.setItem('Agenda', JSON.stringify(traerArrayObjetos))
                listarLocalStorage()
            }
        })
    }
})

//Buscar

const btnBuscar = document.querySelector('.btn-buscar')
const search = document.getElementById('search')

btnBuscar.addEventListener('click', e =>{
    e.preventDefault()
    let buscar = document.getElementById('buscar').value
    console.log(buscar)
     
    const traerArrayObjetos =JSON.parse(localStorage.getItem("Agenda"))
    let filtrado = traerArrayObjetos.filter(datos => datos.nomEst.toLowerCase() === buscar.toLowerCase())
    console.log(filtrado)

    let mostrarBusqueda = document.getElementById('mostrarBusqueda')
    mostrarBusqueda.innerHTML = ''

    filtrado.length === 0 ?
    alert ('No existe')
    :
    filtrado.map(mos =>{
        const {id, nomEst,  nomMen,  email, fecha, hora}= mos

        mostrarBusqueda.innerHTML +=`
            <h1>${nomEst}</h1>
            <h1>${nomMen}</h1>
            <h1>${fecha}</h1>
            
        `

    })
})