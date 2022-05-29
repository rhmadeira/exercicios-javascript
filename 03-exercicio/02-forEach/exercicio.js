//Mostre no console cada paragrafo do site

const paragrafos = document.querySelectorAll('p')

paragrafos.forEach( p => console.log(p))

//Mostre o texto dos pagrafos no console

paragrafos.forEach( p => console.log(p.innerText))

//Mostrar item e index de todas as imagens

const imagens = document.querySelectorAll('img')

imagens.forEach( (img, index) => console.log(img, index))