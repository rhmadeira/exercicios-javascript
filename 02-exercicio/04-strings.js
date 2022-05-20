// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Taxa Cliente',
    valor: 'R$ 49',
  },
];

//Minha resolução

let totalTaxa = 0
let totalrecebimento = 0
transacoes.forEach((item)=> {
  if(item.descricao.startsWith("Taxa")){
    totalTaxa = totalTaxa + +item.valor.replace('R$', ' ').trim()
  }
  if(item.descricao.startsWith("Rece")){
    totalrecebimento = totalrecebimento + +item.valor.replace('R$', ' ').trim()
  }
  
})

// Resolução Professor

/*
let taxaTotal = 0
let recebimentoTotal = 0
transacoes.forEach((item)=> {
  const numeroLimpo = +item.valor.replace("R$ ", "")
  if(item.descricao.slice(0,4) === "Taxa"){
    taxaTotal = taxaTotal + numeroLimpo
  }else{
    recebimentoTotal = recebimentoTotal + numeroLimpo
  }
})

*/

//-------------------------------------------------------------------
// Retorne uma array com a lista abaixo

//Resposta:
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const transportesArray = transportes.split(';')


//-------------------------------------------------------------------
// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

//Resposta:

html = html.split("span").join("a");
console.log(html);



//-------------------------------------------------------------------
// Retorne o último caracter da frase

//Minha resolução
const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length - 1))

//Resolução do professor

//const frase = 'Melhor do ano!';
//console.log(frase(frase.length - 1))

//-------------------------------------------------------------------
// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

// Minha resolução

let taxa
transacoes2.forEach(item => {
  let inputClean = item.trim().toLocaleLowerCase()
  if(inputClean.slice(0,4) === "taxa"){
    taxa = inputClean.split(" ").length    
  }
})
console.log(taxa)

//Resolução do professor

/*
let totalTaxas = 0
transacoes2.forEach(item => {
  item = item.toLocaleLowerCase().trim().slice(0,4)
  if(item === "taxa"){
    totalTaxas++
  }
})
console.log(totalTaxas)
*/