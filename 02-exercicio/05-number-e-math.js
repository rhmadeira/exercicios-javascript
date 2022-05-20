// Retorne um número aleatório
// entre 1050 e 2000
const aleatorio = Math.floor(Math.random() *(2000 - 1050 + 1)+ 1050) 
//console.log(aleatorio)


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 27, 9';
const numerosArray = numeros.split(",")
//console.log(Math.max(...numerosArray))

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];


//Minha resolução                     
limparPreco(listaPrecos)

function limparPreco(lista){
  let somaTotal = 0
  lista.forEach(item => {
  item = item.toUpperCase().replace("R$", "").trim().replace(",",".")
  item = Math.floor(item)
  somaTotal += item
  })
  console.log(somaTotal.toLocaleString("pt-BR", {style:"currency", currency:"BRL"}))
}

//Resolução do Professor

function limpaPreco(preco){
  preco = +preco.toUpperCase().replace("R$","").trim().replace(",",".")
  preco = +preco.toFixed(2)
  return preco

}
  let soma = 0
  listaPrecos.forEach(i => {
    soma += limpaPreco(i)
  })
console.log(soma.toLocaleString("pt-BR", {style:"currency", currency:"BRL"}))


