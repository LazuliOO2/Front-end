const userInfo = document.getElementById('user-info');
const carrinho = document.getElementById('carrinho-container');
const textoCliente = document.getElementById('texto-cliente');
const input = document.getElementById('input-busca');
const logo = document.getElementById('logo');
const busca = document.getElementById('busca');

userInfo.addEventListener('click', () => {
  if (window.innerWidth <= 375) {
    // Se houver texto de busca, apaga
    if (busca.textContent.trim() !== '') {
      busca.textContent = '';
      input.value = '';
      logo.style.display = 'block'; // mostra o logo de volta
    }

    // Alternar carrinho e nome cliente
    const carrinhoVisivel = carrinho.style.display === 'block';
    carrinho.style.display = carrinhoVisivel ? 'none' : 'block';
    textoCliente.style.display = carrinhoVisivel ? 'block' : 'none';
  }
});


input.addEventListener('focus', () => {
  if (window.innerWidth <= 375) {
    logo.style.display = 'none';
  }
});

input.addEventListener('blur', () => {
  if (window.innerWidth <= 375 && input.value.trim() === '') {
    logo.style.display = 'block';
  }
});

function Buscar() {
  const valor = input.value.trim();
  if (valor === '') {
    busca.textContent = 'Por favor, digite algo.';
  } else {
    busca.textContent = `Você buscou por: ${valor}`;
    if (window.innerWidth <= 375) {
      logo.style.display = 'block';
      input.blur(); // tira o foco
    }
  }
}

// Enter também aciona busca
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    Buscar();
  }
});