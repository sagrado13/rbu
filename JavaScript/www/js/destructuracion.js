"use strict";

let miObjeto = {
  a: 1,
  b: 2,
  c: "hola",
  d: function () {
    console.log("soy una funcion");
  },
  e: true,
};

console.log(miObjeto.a);
console.log(miObjeto.b);
console.log(miObjeto.c);
console.log(miObjeto.d);
console.log(miObjeto.e);

let { d, ...otros } = miObjeto;

console.log(d);
console.log(otros);

let miArray = [
  1,
  2,
  "hola",
  () => {
    console.log("soy una funcion");
  },
  true,
];

let [numeroUno, ...resto] = miArray;

console.log(numeroUno);
console.log(resto);
