"use strict";

const persona = {
  nombre: "Iñaki",
  apellido: "González",
  edad: 31,
  id: 3,
  informacionCompleta: function () {
    return `${this.nombre} ${this.apellido} tiene ${this.edad} años`;
  },
};

console.log(persona.informacionCompleta());

const miArray = [1, 2, 3, "hola", 28, { a: 1 }];
console.log(typeof miArray);

let iterador = miArray[Symbol.iterator]();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);

miArray.push(53);
console.log(miArray);
console.log(miArray.length);
console.log(miArray[3]);
