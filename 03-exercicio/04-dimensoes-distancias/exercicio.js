//Verifique a distância da primeira imagem em relação ao top da pagina

const firstImage = document.querySelector('img')
const distanceTop = firstImage.offsetTop

//Retorne a soma da largura de todas as imagens

const imagens = document.querySelectorAll("img")
window.onload = function(){
  somarWidth()
}
function somarWidth(){
  let soma = 0
  imagens.forEach(item => {
    soma += item.offsetWidth
  })
  // console.log(soma)
}

//Verifique se os links da página possuem o minimo recomendado para as telas utilizadas com o dedo. (48px/48px)

const links = document.querySelectorAll('a')
links.forEach(item => {
  const linkWidth = item.offsetWidth
  const linkHeigth = item.offsetHeight
  if(linkWidth >= 48 && linkHeigth >= 48){
    console.log(item, "Dentro dos padrões")
  }else{
    console.log(item, "Fora dos padrões")
  }
})


// Se o browser for menor que 720px, adcione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches
const menu = document.querySelector('.menu')
if(browserSmall){
  menu.classList.add("menu-mobile")
}