const cpfs = document.querySelectorAll(".cpf li")

const elementInnerText = ([...element]) => {
  return element.map(item => item.innerText)
}

const limpaCpf = (cpf) => {
  return cpf.replace(/\D/g, "")
}

const montarCpf = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4")
}

const formatarCpfs = (cpfs) => {
  return cpfs.map(item => limpaCpf(item)).map(item => montarCpf(item))

}

const initformatacao = (cpfs) =>{
  const listaCpf = elementInnerText(cpfs)
  const cpfFormatados = formatarCpfs(listaCpf)
  cpfs.forEach((item, index) => {
    item.innerText = cpfFormatados[index]
  })
}

initformatacao(cpfs)
