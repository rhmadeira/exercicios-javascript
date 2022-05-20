// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce


//Minha resposta
const paragrafos = document.querySelectorAll("p");
const arrayParagrafos = Array.from(paragrafos)
const soma = arrayParagrafos.reduce((ac, i) => {
  return ac + i.innerText.length
}, 0)
console.log(soma)


//Resposta do Professor

const paragrafos2 = document.querySelectorAll("p");
const totalCaracteres = Array.prototype.reduce.call(paragrafos2, (acumulador, item) => {
  return acumulador + item.innerText.length
}, 0)
console.log(totalCaracteres)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag)
  classe ? elemento.classList.add(classe) : ""
  conteudo ? elemento.innerText = conteudo : ""
  return elemento
}

console.log(criarElemento("div","ativo", "poadadasda"))



// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico


const h1Classe = criarElemento.bind(null,"h1","titulo")
console.log(h1Classe("conteudo"))