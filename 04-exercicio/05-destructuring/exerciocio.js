// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector("button")
const btnStyle = getComputedStyle(btn)

const {backgroundColor, color, margin} = btnStyle
console.log(backgroundColor)
console.log(color)
console.log(margin)

// Troque os valores das variáveis abaixo

let cursoAtivo = "JS";
let cursoInativo = "HTML";

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
console.log(cursoAtivo)
console.log(cursoInativo)


// Corrija o erro abaixo
const cachorro = {

  nome:"Bob",
  raca:"labrador",
  cor:"Amarelo"
}

const {Cor: bobCor} = cachorro