/*
  - A partir deste exercício, você está livre para escolher os nomes das suas  
    variáveis e constantes!

  - Após resolver cada exercício, tente reescrever partes do seu código para  
    deixá-lo mais legível.
    
    Por exemplo, uma expressão typeof crazyArray[i] === 'boolean' pode ser  
    armazenada em uma constante "isItemABoolean".

    Falaremos mais sobre legibilidade na revisão destes exercícios =)
*/

/*
  01

  - Abaixo do array "fruits", verifique se "abacaxi" existe no array. Se  
    existir, exiba no console a mensagem "A string "abacaxi" existe no array  
    fruits.";
  - Se "abacaxi" não existir, verifique se "pera" existe no array. Se existir,  
    exiba no console a mensagem "A string "pera" existe no array fruits.";
  - Se nenhuma das duas frutas existirem no array, exiba no console a mensagem  
    "Nem pera nem abacaxi existem no array "fruits".".
*/

//Resposta: 1
const fruits = ['morango', 'banana', 'mamão']
if(fruits.includes("abacaxi")){
  console.log(`A string "abacaxi" existe no array  
  fruits.`)
}else if(fruits.includes("pera")){
  console.log(`A string "pera" existe no array  
  fruits.`)
}else{
  console.log('Nem pera nem abacaxi existem no array "fruits".')
}

//Resposta: 2



/*
  02

  - Armazene em uma constante apenas a hora atual na qual você está fazendo este  
    exercício. Ex.: 18;
  - À partir das 6, exiba "Bom dia!" no console;
  - À partir das 12, exiba "Boa tarde!";
  - À partir das 18, exiba "Boa noite!".

  Obs.: tanto a expressão do lado esquerdo quanto a do lado direito do operador  
  lógico precisam ter a constante especificada. Exemplo: hour > x && hour < y.
*/

//Resposta:
let data = new Date;
let hora = data.getHours()

if(hora > 6 && hora <= 12){
  // console.log("bom dia")
} else if(hora > 12 && hora <= 18){
  // console.log("Boa Tarde")
}else if(hora > 18){
  // console.log("Boa noite!")
}



/*
  03

  - Armazene sua idade em uma constante;
  - Escreva uma estrutura condicional em que, se a idade é 7 anos ou menos, ou  
    se a idade é 65 anos ou mais, a frase "Para você, a entrada é grátis!" é  
    armazenada em uma variável;
  - Se a idade não atende às condições acima, a variável deve armazenar a  
    mensagem "A entrada é R$ 30,00.";
  - Exiba a mensagem no console;
  - Agora, teste diferentes idades para se certificar que a condição do `if`  
    também está funcionando.
*/


//Resposta:
const myAge = 31;
if(myAge < 7 || myAge >= 65){
  const gratis = "Para você, a entrada é grátis!"
  // console.log(gratis)
}else{
  const paga = "A entrada é R$ 30,00."
  // console.log(paga)

}


/*
  04

  - Utilize um for loop para gerar um novo array com apenas os números entre  
    11 e 90 presentes no array "numbers" (incluindo 11 e 90);
  - Exiba o novo array no console;
  - O resultado deve ser: [34, 46, 90, 25, 11, 89, 76].
*/

//Resposta: 1
const numbers = [7, 92, 34, 46, 90, 25, 11, 3, 89, 76, 99]
const resultado = []
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] >= 11 && numbers[i] <= 90 ){
    resultado.push(numbers[i])
  }
}
// console.log(resultado)

//Resposta: 2

const teste = numbers.filter(item => {
  if(item >= 11 && item <= 90){
  return item
  }
})

// console.log(teste)


/*
  05

  - O array "crazyArray" (abaixo) possui 3 tipos de dados: numbers, booleans  
    e strings;
  - Considerando este array, substitua os "X" da frase abaixo pelas informações  
    corretas;
  - Gere essas informações à partir de um for loop;
  - Exiba a frase no console.

  "O crazyArray tem X booleans, X números e X strings."
*/

//Resposta: 1
const crazyArray = [true, 869, 'oi', 71, false, 83, '35', true, 397, 'js', false]
const bol = []
const num = []
const str = []
for(let i = 0; i < crazyArray.length; i++){
  if(typeof crazyArray[i] === "boolean"){
    bol.push(typeof crazyArray[i])
  }else if(typeof crazyArray[i] === "number"){
    num.push(typeof crazyArray[i])
  }else if(typeof crazyArray[i] === "string"){
    str.push(typeof crazyArray[i])
  }
}
console.log(`O crazyArray tem ${bol.length} booleans, ${num.length} números e ${str.length} strings.`)

//Resposta: 2

function tipos(array){

  const bol = array.filter(item => {
    if(typeof item === "boolean")
    return typeof item   
  })
  const num = array.filter(item => {
    if(typeof item === "number")
    return typeof item
  })
  const str = array.filter(item => {
   if(typeof item === "string")
    return typeof item 
  })

  console.log(`O crazyArray tem ${bol.length} booleans, ${num.length} números e ${str.length} strings.`)
}

tipos(crazyArray)

/*
  06

  - Abaixo do array "randomNumbers", utilize um for loop para gerar 2 novos  
    arrays: um array com apenas os números ímpares do "randomNumbers" e um outro  
    array com apenas os números pares;
  - Após isso, utilizando os dois arrays que você criou, exiba a frase abaixo  
    no console, substituindo "XX, XX e XX" pelos números corretos. Os números  
    da frase não devem ser inseridos com a notação "item[index]" e os "e" antes  
    do último número ímpar e do último número par devem constar na frase;
  
  - Dica: para saber se um número é par, o restante da divisão dele por 2 deve  
    ser 0.

  "Numeros ímpares: XX, XX e XX. Números pares: XX, XX e XX."
*/

//Resposta: 1
const randomNumbers = [73, 4, 67, 10, 31, 58]

const par = [];
const impa = [];

for(let i = 0; i < randomNumbers.length; i++){
  if(randomNumbers[i] % 2 === 0){
    par.push(randomNumbers[i])
  }else{
    impa.push(randomNumbers[i])
  }
}
console.log(par)
console.log(impa)

//Resposta: 2
function parImpa(array){
  const par = array.filter(item => {
    if(item % 2 === 0)
    return item
  })
  const impa = array.filter(item => {
    if(item % 2 !== 0)
    return item
  })
  console.log(par)
  console.log(impa)
}
parImpa(randomNumbers)