"use strict";

const persona = {
  nombre: "Iñaki",
  apellido: "González",
  edad: 31,
};

console.log(persona.edad < 18);

/* if (persona.edad < 18 && persona.nombre === "Iñaki") {
  console.log("No puede beber alcohol");
} else {
  console.log("Si puede beber alcohol");
} */

if (persona.edad < 18 || persona.nombre === "Iñaki") {
  console.log("No puede beber alcohol");
} else {
  console.log("Si puede beber alcohol");
}
