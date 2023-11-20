const sincronica = () => {
  console.log("SINCRONICO");
  dos();
  uno();
  tres();
};
const asincronica = () => {
  console.log("ASINCRONICO");
  dos(); // BIEN
  unoa(); // FUE A BUSCAR Y CONTINUA
  tresa(); // EJECUTO  
};

function uno() {
  console.log("UNO");
}
function unoa() {
  setTimeout(() => {
    console.log("UNO");
  }, 4000);
}
function dos() {
  console.log("dos");
}
function tres() {
  console.log("tres");
}
function tresa() {
  setTimeout(() => {
    console.log("TRES");
  }, 1000);
}

sincronica();
asincronica();
