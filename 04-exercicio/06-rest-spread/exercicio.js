// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6

// function createButton (bacground, color){
//   bacground = bacground || "blue";
//   if(color === undefined){
//     color = "red";
//   }
// }
// const buttonElement = document.createElement("button")
// buttonElement.style.background = bacground;
// return buttonElement}


function createButton (bacground = "blue", color = "red"){
  
const buttonElement = document.createElement("button")
buttonElement.style.background = bacground;
buttonElement.style.color = color;

return buttonElement

}

const redBtn = createButton()
console.log(redBtn)




// Utilize o método push para inserir as frutas ao final de comidas.

const frutas = ["Banana", "Uva", "Morango"];
const comidas = ["pizza", "Batata"];

comidas.push(...frutas)
console.log(comidas)