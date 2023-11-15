/**
Dado un objeto carro con las siguientes propiedades, indicar si es camioneta, dado que esta tiene 5 puertas o si es Turismo (diferente de 5).

 color= blanco,
 traccion= 4x4,
 llantas= 4,
 puertas= 5,
 marca= Renault 
**/

let carro ={
    color: 'blanco',
    traccion: '4x4',
    llantas: 4,
    puertas: 5,
    marca: 'Renault'
}

if(carro.puertas === 5){
    console.log('Camioneta');
}else{
   console.log('Turismo');
}


//---------------------------------------------//
/**Crear una función que imprima por consola el nombre, edad y estatura de un objeto persona.**/

let persona = {
    nombre: 'Yudith',
    edad: 35,
    estatura: 1.55
}

function describirPersona(p){
    console.log(`${p.nombre} tiene una edad de ${p.edad} años
    y mide ${p.estatura}`)
}

describirPersona(persona);