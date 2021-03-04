"use strict";

let miArray = [];

for (let i = 0; i < 10; i++) {
  miArray.push(i);
}

console.log(miArray);

let miArray2 = ["Hola", "buen día", "adiós"];

for (let i = 0; i < miArray2.length; i++) {
  console.log(miArray2[i]);
  const convertirMayusculas = miArray2[i].toUpperCase();
  console.log(convertirMayusculas);
}

miArray2.map((item) => {
  console.log(item);
  const convertirMayusculas = item.toUpperCase();
  console.log(convertirMayusculas);
});

miArray2.filter((item) => {
  const respuesta = item.toLowerCase() === "hola";
  console.log(respuesta);
});

let numeros = [1, 2, 3, 4, 6, 7, 8, 9];

const soloPares = (numeroActual) => {
  return numeroActual % 2 === 0;
};

let resultado = numeros.filter(soloPares);

console.log(resultado);
