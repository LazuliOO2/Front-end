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

      // Atualiza as categorias
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

      // Atualiza a imagem
      bannerImg.src = data.imagem;
    });
  });

// Aciona o primeiro por padrão
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

    // Posiciona o menu abaixo do .col
    const nav = document.querySelector("nav");
    const navRect = nav.getBoundingClientRect();
    hoverMenu.style.left = `${navRect.left + window.scrollX + 530}px`;
    hoverMenu.style.top = `${navRect.bottom + window.scrollY - 110}px`; // ou -15, teste o que fica melhor
    hoverMenu.style.display = "block";
  });
});

// Esconde o menu quando sair do nav
document.querySelector("nav").addEventListener("mouseleave", () => {
  hoverMenu.style.display = "none";
});

