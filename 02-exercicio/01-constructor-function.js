// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

//Resposta:

function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
  this.andar = () => {
    console.log(this.nome + ' esta andando')
  }
}

//--------------------------------------------------------------

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

//Resposta:

const pessoa01 = new Pessoa("João", 20);
const pessoa02 = new Pessoa("Maria", 25);
const pessoa03 = new Pessoa("Bruno", 15);

//--------------------------------------------------------------

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

//Resposta:

function Dom(select){

  this.elements = document.querySelectorAll(select);

  this.addClass = (classe) => {
    this.elements.forEach(i => i.classList.add(classe))
  };

  this.removeClass = (classe) => {
    this.elements.forEach(i => i.classList.remove(classe))
  };
}

const li = new Dom('li')