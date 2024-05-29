
let imagemPrincipal = document.getElementById("imagemPrincipal");
const modelo1 = document.getElementById("modelo1")
const modelo2 = document.getElementById("modelo2")
const modelo3 = document.getElementById("modelo3")
const divImagens = document.querySelectorAll(".modelos")
// Função para trocar a imagem principal com a imagem clicada
modelo1.addEventListener("click", e => {
  const caminhoImagem = imagemPrincipal.src
  imagemPrincipal.src = modelo1.src
  modelo1.src = caminhoImagem
})
modelo2.addEventListener("click", e => {
  const caminhoImagem = imagemPrincipal.src
  imagemPrincipal.src = modelo2.src
  modelo2.src = caminhoImagem
})
modelo3.addEventListener("click", e => {
  const caminhoImagem = imagemPrincipal.src
  imagemPrincipal.src = modelo3.src
  modelo3.src = caminhoImagem
})




