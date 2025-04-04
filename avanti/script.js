function Buscar() {
  const inputElement = document.querySelector('.search-box input');
  const inputValue = inputElement.value.trim(); // remove espaços em branco no começo/fim
  const elemento = document.getElementById('busca');

  if (inputValue === '') {
      elemento.textContent = 'Por favor, digite algo.';
  } else {
      elemento.textContent = `Você buscou por: ${inputValue}`;
  }
}

const categoriasPorDepartamento = [
{
  colunas: [
    ["Categoria A1", "Categoria A2", "Categoria A3","Categoria A4","Categoria A5"],
    ["Categoria A6", "Categoria A7", "Categoria A8","Categoria A9","Categoria A10"],
    ["Categoria A11", "Categoria A12", "Categoria A13","Categoria A14","Categoria A15"]
  ],
  imagem: "img/canecaCozinha.png"
},
{
  colunas: [
    ["Categoria B1", "Categoria B2","Categoria B3",'Categoria B4','Categoria B5'],
    ["Categoria B6", "Categoria B7","Categoria B8",'Categoria B9','Categoria B10'],
    ["Categoria B11", "Categoria B12","Categoria B13",'Categoria B14','Categoria B15']
  ],
  imagem: "img/canecaCozinha.png"
},
{
  colunas: [
    ["Categoria C1", "Categoria C2","Categoria C3","Categoria C4","Categoria C5"],
    ["Categoria C6", "Categoria C7","Categoria C8","Categoria C9","Categoria C10"],
    ["Categoria C11", "Categoria C12","Categoria C13","Categoria C14","Categoria C15"]
  ],
  imagem: "img/canecaCozinha.png"
},
{
  colunas: [
    ["Categoria D1", "Categoria D2","Categoria D3","Categoria D4","Categoria D5"],
    ["Categoria D6", "Categoria D7","Categoria D8","Categoria D9","Categoria D10"],
    ["Categoria D11", "Categoria D12","Categoria D13","Categoria D14","Categoria D15"]
  ],
  imagem: "img/canecaCozinha.png"
}
];

const departamentos = document.querySelectorAll(".departamento-item");
const categoriasContainer = document.getElementById("categorias-container");
const bannerImg = document.getElementById("banner-img");

departamentos.forEach(dep => {
dep.addEventListener("mouseenter", () => {
  const index = dep.getAttribute("data-index");
  const data = categoriasPorDepartamento[index];

  categoriasContainer.innerHTML = "";
  data.colunas.forEach(coluna => {
    const div = document.createElement("div");
    div.classList.add("categoria-coluna");

    const titulo = document.createElement("h6");
    titulo.textContent = "Categoria";
    div.appendChild(titulo);

    coluna.forEach(cat => {
      const p = document.createElement("p");
      p.textContent = cat;
      div.appendChild(p);
    });

    categoriasContainer.appendChild(div);
  });

  bannerImg.src = data.imagem;
});
});

window.addEventListener("DOMContentLoaded", () => {
departamentos[0].dispatchEvent(new Event("mouseenter"));
});

const colDepartamentos = document.querySelectorAll("nav .col");
const hoverCategoriasContainer = document.getElementById("hover-categorias-container");
const hoverBannerImg = document.getElementById("hover-banner-img");
const hoverMenu = document.getElementById("departamento-hover-menu");

colDepartamentos.forEach((col, i) => {
col.addEventListener("mouseenter", () => {
  const data = categoriasPorDepartamento[i % categoriasPorDepartamento.length];

  hoverCategoriasContainer.innerHTML = "";
  data.colunas.forEach(coluna => {
    const div = document.createElement("div");
    div.classList.add("categoria-coluna");

    const titulo = document.createElement("h6");
    titulo.textContent = "Categorias";
    div.appendChild(titulo);

    coluna.forEach(cat => {
      const p = document.createElement("p");
      p.textContent = cat;
      div.appendChild(p);
    });

    hoverCategoriasContainer.appendChild(div);
  });

  hoverBannerImg.src = data.imagem;

  const nav = document.querySelector("nav");
  const navRect = nav.getBoundingClientRect();
  hoverMenu.style.left = `${navRect.left + window.scrollX + 530}px`;
  hoverMenu.style.top = `${navRect.bottom + window.scrollY - 110}px`;
  hoverMenu.style.display = "block";
});
});

document.querySelector("nav").addEventListener("mouseleave", () => {
hoverMenu.style.display = "none";
});


const setaAvancar = document.querySelector('.seta-avançar');
const todosCards = document.querySelectorAll('.TodosCard');
const setaVoltar = document.querySelector('.seta-voltar');
const circulos = document.querySelectorAll('.circulo');
let currentIndex = 0;

function atualizarCirculos(indexAtivo) {
  circulos.forEach((circulo, index) => {
    if (index === indexAtivo) {
      circulo.classList.add('ativo');
      circulo.classList.remove('inativo');
    } else {
      circulo.classList.remove('ativo');
      circulo.classList.add('inativo');
    }
  });
}


// Seta avançar
setaAvancar.addEventListener('click', () => {
  // desativa o atual
  todosCards[currentIndex].classList.remove('cardAtivo');
  todosCards[currentIndex].classList.add('cardDesativado');

  // atualiza o índice, voltando ao início se for o último
  currentIndex = (currentIndex + 1) % todosCards.length;

  // ativa o novo
  todosCards[currentIndex].classList.remove('cardDesativado');
  todosCards[currentIndex].classList.add('cardAtivo');

  atualizarCirculos(currentIndex);
});

setaVoltar.addEventListener('click', () => {
  // desativa o atual
  todosCards[currentIndex].classList.remove('cardAtivo');
  todosCards[currentIndex].classList.add('cardDesativado');

  // atualiza o índice: se for 0, volta pro último
  currentIndex = (currentIndex - 1 + todosCards.length) % todosCards.length;

  // ativa o novo
  todosCards[currentIndex].classList.remove('cardDesativado');
  todosCards[currentIndex].classList.add('cardAtivo');

  atualizarCirculos(currentIndex);
});

circulos.forEach((circulo, index) => {
  circulo.addEventListener('click', () => {
    if (index !== currentIndex) {
      todosCards[currentIndex].classList.remove('cardAtivo');
      todosCards[currentIndex].classList.add('cardDesativado');

      currentIndex = index;

      todosCards[currentIndex].classList.remove('cardDesativado');
      todosCards[currentIndex].classList.add('cardAtivo');

      atualizarCirculos(currentIndex);
    }
  });
});


// SEGUNDO CARROSSEL
// SEGUNDO CARROSSEL

const todosCards2 = document.querySelectorAll('.TodosCard2');
const setaAvancar2 = document.querySelector('#seta-avançar2');
const setaVoltar2 = document.querySelector('#seta-voltar2');
const circulos2 = document.querySelectorAll('#circulos2 .circulo');
let currentIndex2 = 0;

// Atualiza a aparência dos círculos do segundo carrossel
function atualizarCirculos2(indexAtivo) {
  circulos2.forEach((circulo, index) => {
    if (index === indexAtivo) {
      circulo.classList.add('ativo');
      circulo.classList.remove('inativo');
    } else {
      circulo.classList.remove('ativo');
      circulo.classList.add('inativo');
    }
  });
}

// Avançar card
setaAvancar2.addEventListener('click', () => {
  todosCards2[currentIndex2].classList.remove('cardAtivo');
  todosCards2[currentIndex2].classList.add('cardDesativado');

  currentIndex2 = (currentIndex2 + 1) % todosCards2.length;

  todosCards2[currentIndex2].classList.remove('cardDesativado');
  todosCards2[currentIndex2].classList.add('cardAtivo');

  atualizarCirculos2(currentIndex2);
});

// Voltar card
setaVoltar2.addEventListener('click', () => {
  todosCards2[currentIndex2].classList.remove('cardAtivo');
  todosCards2[currentIndex2].classList.add('cardDesativado');

  currentIndex2 = (currentIndex2 - 1 + todosCards2.length) % todosCards2.length;

  todosCards2[currentIndex2].classList.remove('cardDesativado');
  todosCards2[currentIndex2].classList.add('cardAtivo');

  atualizarCirculos2(currentIndex2);
});

// Clique nos círculos para mudar o card
circulos2.forEach((circulo, index) => {
  circulo.addEventListener('click', () => {
    if (index !== currentIndex2) {
      todosCards2[currentIndex2].classList.remove('cardAtivo');
      todosCards2[currentIndex2].classList.add('cardDesativado');

      currentIndex2 = index;

      todosCards2[currentIndex2].classList.remove('cardDesativado');
      todosCards2[currentIndex2].classList.add('cardAtivo');

      atualizarCirculos2(currentIndex2);
    }
  });
});

