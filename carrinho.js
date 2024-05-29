let produtos = [
    { nome: "Camiseta Foto 1", preco: 40.00 },
    { nome: "Camiseta Modelo 1", preco: 50.00 },
    { nome: "Camiseta Modelo 2", preco: 60.00 },
    { nome: "Camiseta Modelo 3", preco: 70.00 }
];

// Função para obter o preço do produto com base no nome
function obterPrecoProduto(nome) {
    const produto = produtos.find(produto => produto.nome === nome);
    return produto ? produto.preco : 0;
}

// Variável para armazenar a quantidade de itens no carrinho
let carrinhoQuantidade = 0;
const carrinho = [];

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nome, preco, quantidade, tamanho, imageUrl) {
    
    
    const produto = {
        nome: nome,
        preco: preco,
        quantidade: quantidade,
        tamanho: tamanho,
        imageUrl:imageUrl
        
    };
console.log(imageUrl)
    carrinhoQuantidade += quantidade;
    carrinho.push(produto);

    const carrinhoCount = document.getElementById("carrinho-count");
    carrinhoCount.innerText = carrinhoQuantidade;

    const carrinhoList = document.getElementById("carrinho-list");
    const listItem = document.createElement("li");

    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    imgElement.alt = "Imagem do produto";
    listItem.appendChild(imgElement);

    const precoTotal = produto.preco * produto.quantidade;
    const produtoInfo = document.createElement("span");
    produtoInfo.textContent = ` ${produto.nome} - Quantidade: ${produto.quantidade}, Tamanho: ${produto.tamanho},Preço Unitário: ${produto.preco} USD, Preço Total: ${precoTotal} USD`;
    listItem.appendChild(produtoInfo);

    carrinhoList.appendChild(listItem);
}

// Função para exibir ou ocultar o menu do carrinho
function toggleCarrinhoMenu() {
    const carrinhoMenu = document.getElementById("carrinho-menu");
    carrinhoMenu.style.display = carrinhoMenu.style.display == "block" ? "none" : "block";
}

// Função para fechar o carrinho
function fecharCarrinho() {
    const carrinhoMenu = document.getElementById("carrinho-menu");
    carrinhoMenu.style.display = "none";
}
function atualizarImagemPrincipal(element) {
    const imagemPrincipal = document.getElementById('imagemPrincipal');
    imagemPrincipal.src = element.src;
    imagemPrincipal.alt = element.alt;
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("carrinho-icon").addEventListener("click", toggleCarrinhoMenu);
    document.getElementById("add-to-cart-button").addEventListener("click", handleAddToCart);
});

const carrinhoButon = document.getElementById("carrinho-icon")


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("carrinho-icon").addEventListener("click", toggleCarrinhoMenu);
});


function handleAddToCart() {
    const imagemPrincipal = document.getElementById('imagemPrincipal');
    const nome = imagemPrincipal.alt;
    const preco = obterPrecoProduto(nome);
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const tamanho = document.getElementById("tamanho").value;
    const imageUrl = imagemPrincipal.src
    console.log('URL da imagem:', imageUrl);
    console.log('Nome do Produto:', nome)
    adicionarAoCarrinho(nome, preco, quantidade, tamanho, imageUrl);
    
}





