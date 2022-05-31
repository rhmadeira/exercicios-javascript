//Retorne no console todas as imagens do site

const img = document.querySelectorAll('img')

//Retorne no console apenas as imagens que  comecaram com a palavra imagem

const imagensDosAnimais = document.querySelectorAll('img[src^="./img/imagem"]')

//selecione todos os links internos

const linksInternos = document.querySelectorAll('a[href^="#"]')

//Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector('.animais-descricao h2')

//Selecione o ultimo p do site

const paragrafos = document.querySelectorAll('p')
const ultimoP = paragrafos[--paragrafos.length]