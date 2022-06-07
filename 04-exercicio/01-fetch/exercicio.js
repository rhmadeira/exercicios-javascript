// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCep = document.querySelector('#cep')
const btnCep = document.querySelector('.btn')
const resultadoCep = document.querySelector('.resultado')

btnCep.addEventListener('click', handleClick)

function handleClick(event) {
  event.preventDefault()
  cp = inputCep.value
  buscaCep(cp)

}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(r => r.text()).then(r => {
      const p = document.createElement('p')
      p.innerText = r;
      resultadoCep.appendChild(p)
    })
}


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const brl = document.querySelector('.brl p')

function fetchBtc(){
fetch('https://blockchain.info/ticker')
.then(response => response.json()).then(btc => {
 brl.innerHTML = ("R$ " + btc.BRL.buy).replace(".", ",")
  console.log(btc.BRL.buy)
})
}
// setInterval(fetchBtc, 30000)
fetchBtc()


// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const piadaDisplay = document.querySelector('.piada p')
const proxima = document.querySelector('.btnPiada')
console.log(piadaDisplay)

function piadaAleatoria(){
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(piada => {
     piadaDisplay.innerText = piada.value;
  }
)}
proxima.addEventListener('click', piadaAleatoria)

piadaAleatoria()