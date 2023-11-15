function userName (callback) {
    let name = prompt('Su nombre: ')
    callback(name)
}

function mensaje(name){
    alert ('Hola  ' + name)
}

userName(mensaje)

//------------------------------------------//
function math(a, b, callback) {
    let respuesta = a+ b
    callback(respuesta)
}

function suma(res){
    if( res > 10){
        alert('El resultado de la suma es mayor a 10 ' + res)
    }
    else{
        alert('El resultado de la suma es menor a 10 ' + res)
    }
}

math(5,3, suma)