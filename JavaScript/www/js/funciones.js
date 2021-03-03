"use strict";

/* function sumar(num1, num2) {
  console.log(arguments);
  const resultado = num1 + num2;
  return resultado;
}

let a = sumar(5, 2);
console.log(a);

let b = sumar(10, -3);
console.log(b);

let c = sumar(a, b);
console.log(c);

let d = sumar(b, c);
console.log(d); */

function sumar(numeros) {
  console.log(arguments);
  const resultado = numeros.num1 + numeros.num2;
  return resultado;
}

let a = sumar({ num1: 5, num2: 2 });
console.log(a);

let b = sumar({ num1: 10, num2: -3 });
console.log(b);

let c = sumar({ num1: a, num2: b });
console.log(c);

let d = sumar({ num1: b, num2: c });
console.log(d);
