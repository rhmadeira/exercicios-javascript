//quando o usuário clicar nos links internos do site adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. previna o comportamento padrão desses links.
const internalLinks = document.querySelectorAll('a[href^="#"]')
function handlInternalLink(event){
  event.preventDefault()
  internalLinks.forEach(link => link.classList.remove("ativo"))
  this.classList.add("ativo")
}

internalLinks.forEach(link => {
  link.addEventListener("click", handlInternalLink)
})

//Selecione todos os elementos do site comecando a partir do body, ao clicar, mostre exatamente quais elementos estao sendo  clicados.
//ultilizando o mesmo código, ao invés de mostrar no console, remova o elemento que esta sendo clicado.
function handleClick(e){
  console.log(e.target)
  e.target.remove()
}

document.body.addEventListener("click", handleClick)

//Se o usuario clicar na tecla t(t), almente todo o texto do site.

function handleKey(e){
  if(e.key === "t"){
      document.body.classList.toggle("textoMaior")
    }
}

document.addEventListener("keydown", handleKey)