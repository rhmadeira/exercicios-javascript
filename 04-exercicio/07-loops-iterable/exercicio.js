// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const liS = document.querySelectorAll("li")
for(const i of liS){
  i.classList.add("ativo")
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(const i in window){
  console.log(`${i}:${window[i]}`)
}


