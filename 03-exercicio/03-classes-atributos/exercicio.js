//Adcionar a classe 'ativo' e 'teste' ao menu e mostrar no console

const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste')
console.log(menu.classList)

//Remover a classe 'teste' do menu

menu.classList.remove('teste')

//Verificar se tem a classe 'ativo' no menu. caso sim, remova.

if(menu.classList.contains('ativo')){
  menu.classList.remove('ativo')
  console.log(menu.classList)
}

//Adicione a classe ativo em todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a')
itensMenu.forEach(item => item.classList.add('ativo'))


//Remova a classe ativo de todos os itens do menu e  matenha apenas no primeiro

itensMenu.forEach((item, index) => {
  if(index !== 0){
    item.classList.remove('ativo')
  } 
})

//Verifique se as imagens possuem o atribute alt

const imgs = document.querySelectorAll('img')

imgs.forEach(item => {
  console.log(item.hasAttribute("alt"))
  console.log(item.getAttribute("alt"))
})

//Modifique o href do link externo do menu

const linkExterno = document.querySelector('a[href^="https"]');

linkExterno.setAttribute("href", "https:www.google.com")