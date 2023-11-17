const array = [3004562314, 60112365521, 3214521212, 5, 7, 2];

const respFilter = array.filter((fi) => fi === 2);
const respFind = array.find((fi) => fi === 2);
const respinclude = array.includes(2);

const revers = [...array].reverse(array);
const toRe = array.toReversed();

const firstElement = array.shift();

const tosting = array.toString();

// console.log(array);
// console.log(tosting);

// ================CALLBACK=======================================//
function modifyArray(array, callback) {
  // primero va hacer algo - hacer push
  array.push(3004562563);
  console.log("dentro de la primera");
  // Ejecuta el callback, mostrar el array completo
  callback(array);
}

modifyArray(array, agregar);

function agregar(argumento) {
  setTimeout(() => {
    console.log("estoy dentro del callback", argumento);
  }, 3000);
}
