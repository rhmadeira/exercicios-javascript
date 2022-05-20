// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

//Minha resolução
const cursos = document.querySelectorAll(".curso")
const arrayCursos = Array.from(cursos)
const todosOsCursos = arrayCursos.map(item => {
  const titulo = item.querySelector("h1").innerText
  const descricao = item.querySelector("p").innerText
  const aulas = item.querySelector(".aulas").innerText
  const horas = item.querySelector(".horas").innerText
  return{
    titulo,
    descricao,
    aulas,
    horas,
  }
})
console.log(todosOsCursos)

//-------------------------------------------------------------
// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresQ100 = numeros.filter(i => i > 100)
console.log(maioresQ100)


//------------------------------------------------------------
// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true

const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const fazParte = instrumentos.some(i => i === "Baixo")
console.log(fazParte)

//-------------------------------------------------------------

//Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  },
  {
    item: 'Arroz',
    preco: 'R$ 5,50'
  }
]

//Minha resolução

const todosOsPrecos = compras.map(i => i.preco.toLowerCase().replace("r$ ", "").replace(",","."))

const totalValores = todosOsPrecos.reduce((ac,i) => {
  return ac + +i
}, 0)
console.log(totalValores)


//Resolução do professor

const valorTotal = compras.reduce((acumulador, item) => {
const precoLimpo = +item.preco.replace("R$ ", "").replace(",", ".")
return acumulador + precoLimpo
}, 0)

console.log(valorTotal)