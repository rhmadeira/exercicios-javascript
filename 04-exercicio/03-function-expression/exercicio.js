// Remova o erro

/*
princeNumber("R$ 99,99");
const princeNumber = n => +n.replace('R$', '').replace(',','.');
*/

const princeNumber = n => +n.replace('R$', '').replace(',','.');
console.log(princeNumber("R$ 99,99"));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(function (){
  const isolado = "dentro";
  console.log(isolado)
}) ();

const isolado = "fora"
console.log(isolado)

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

const callback = () => {
  console.log("hello")
}

active(callback)
