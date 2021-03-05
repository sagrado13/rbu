"use strict";

/* CALL STACK */
const obtenerNombre = () => "Iñaki";

const obtenerApellido = () => "González";

function obtenerNombreCompleto() {
  const nombre = obtenerNombre();
  const apellido = obtenerApellido();
  return `${nombre} ${apellido}`;
}

const nombreCompleto = obtenerNombreCompleto();

console.log("nombre completo ", nombreCompleto);

/* ASYNC-AWAIT */

const fabricaDePromesas = (indice) =>
  new Promise((resolve, reject) => {
    const tiempoRejected = Math.floor(Math.random() * 10000) + 1000;
    const tiempoResolved = Math.floor(Math.random() * 10000) + 1000;
    setTimeout(() => {
      reject(`la promesa ${indice} falló`);
    }, tiempoRejected);

    setTimeout(() => {
      resolve(`promesa ${indice} satisfecha`);
    }, tiempoResolved);
  });

Promise.race(misPromesas)
  .then((respuesta) => console.log(respuesta))
  .catch((razon) => console.log(razon));

async function miAsyncFunction() {
  try {
    let misPromesas = [];
    for (let i = 0; i < 10; i++) {
      misPromesas = [...misPromesas, await fabricaDePromesas(i)];
    }
    console.log(
      "variable misPromesas al interior de la async function",
      misPromesas
    );
    return misPromesas;
  } catch (error) {
    throw error;
  }
}
function miFunctionNormal() {
  return fabricaDePromesas(2);
}
