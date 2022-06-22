//Exemplo Real para factory Function

function $$(selectedElements){
  const elements = document.querySelectorAll(selectedElements)

  function hide(){
    elements.forEach(item => item.style.display = "none")

    return this;
  }

  function show(){
    elements.forEach(item => item.style.display = "initial")

    return this;
  }

  function on(onEvent, callback){
    elements.forEach(item => item.addEventListener(onEvent, callback))

    return this;
  }

  function addClass(className){
    elements.forEach(item => item.classList.add(className))

    return this;
  }

  function removeClass(className){
    elements.forEach(item => item.classList.remove(className))

    return this;

  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass
  }
}

function handleClick(event){
  console.log(event.target)
  btn.addClass("ativo")
}


const btn = $$("button")
btn.on("click", handleClick)










