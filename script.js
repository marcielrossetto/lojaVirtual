function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger-menu');

    // Alterna a classe "open" para o hamburger e "show" para o menu
    menu.classList.toggle('show');
    hamburger.classList.toggle('open');
}
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para não ter valores negativos
});


const totalElement = document.getElementById('total');
const produtos = document.querySelectorAll('.product-wrapper');
const listaProdutosModal = document.getElementById('lista-produtos-modal');
const totalModalElement = document.getElementById('total-modal');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

let total = 0;
let produtosSelecionados = [];

// Atualiza o total e a lista de produtos ao clicar em "Comprar"
produtos.forEach(produto => {
  const comprarButton = produto.querySelector('.buy-button');
  comprarButton.addEventListener('click', () => {
    const nomeProduto = produto.dataset.nome;
    const precoProduto = parseFloat(produto.dataset.preco);
    const imagemProduto = produto.dataset.imagem;

    total += precoProduto;
    produtosSelecionados.push({
      nome: nomeProduto,
      preco: precoProduto,
      imagem: imagemProduto,
    });

    totalElement.textContent = `${produtosSelecionados.length} - R$ ${total.toFixed(2)}`;
  });
});

// Abre o modal ao clicar no carrinho
totalElement.addEventListener('click', () => {
  modal.style.display = 'block';
  listaProdutosModal.innerHTML = '';
  totalModalElement.textContent = `Total: R$ ${total.toFixed(2)}`;

  produtosSelecionados.forEach(produto => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}" width="50">
      <span>${produto.nome} - R$ ${produto.preco.toFixed(2)}</span>
    `;
    listaProdutosModal.appendChild(li);
  });
});

// Fecha o modal ao clicar no botão de fechar
close.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fecha o modal ao clicar fora dele
window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
