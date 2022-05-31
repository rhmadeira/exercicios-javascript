//Duplicate the menu and add in copy

const copy = document.querySelector('.copy')
const menu = document.querySelector('.menu')
const copyMenu = menu.cloneNode(true)
copy.appendChild(copyMenu)

//select the first DT da DL from faq

//answer
const firstDt = document.querySelector('.faq-lista dt')

//teacher
const faq = document.querySelector('.faq-lista')
const dt = faq.querySelector('dl :nth-child(1)')

//select referring DD of the first DT

//answer
const dd = faq.querySelector('dl :nth-child(2)')

//teacher
const proximoDD = dt.nextElementSibling

//Replace the html content of faq with the content of .animals

const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML