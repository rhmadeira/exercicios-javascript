//Adicione um atributo data-anime="show-down" e
//data-anime="show-right" a todas as sections com
// descricao dos animais

const animaisDescricao = document.querySelectorAll(".animais-descricao section")
animaisDescricao.forEach(section => {
  section.dataset.anime = "show-down";
  section.dataset.anime += " show-rigth";
})


//Utilizando estes atributos, adicione a classe show-down ou show-rigth a sua respectiva section, assim que a mesma aparecer na tela




//No CSS faça com que show-down anime de cima pra baixo e show-rigth continue com a mesma animação da esquerda para direita





//Substitua todas as classes js por data atribute