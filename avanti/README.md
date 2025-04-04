# 🛍 Projeto Avanti 

Este projeto foi desenvolvido como uma vitrine de produtos com animações, carrosséis, responsividade e menus dinâmicos. Inspirado em lojas virtuais modernas, o foco foi oferecer uma experiência fluida ao usuário, seja no desktop, notebook ou mobile.

# Porque Avanti?
Vi que uma vaga de emprego pedia para fazer um teste e isso me chamou a atenção. Resolvi ver esse teste e um dos testes para a vaga seria o site Avanti Decide. Então, decidi fazer uma réplica do site para aprimorar meu conhecimento

## 🏗 Estrutura HTML

- **Cabeçalho**: Inclui links para bibliotecas externas como Bootstrap, Font Awesome, Normalize.css e estilos personalizados.
- **Barra de busca e usuário**: Com ícones interativos e responsivos, adaptando-se conforme a resolução da tela.
- **Menu de categorias**: Utiliza uma estrutura `<nav>` com menu principal e dropdown dinâmico que exibe departamentos e categorias.
- **Seções de destaque**: Contém banners promocionais, carrosséis de cards e informações sobre produtos.
- **Rodapé**: Apresenta informações e ícones sociais de forma organizada.

## 🎨 Estilização CSS

- **Estilo principal (`style.css`)**: Define o layout base, cores, tipografia, animações, responsividade, e efeitos visuais.
- **Responsividade mobile (`styleMobile.css`)**: Adapta todos os elementos para telas pequenas, como smartphones, reorganizando conteúdo e ajustando tamanhos.
- **Responsividade notebook (`styleNotebook.css`)**: Ajustes para telas médias, como notebooks e tablets maiores.
- **Frameworks externos**: Uso do Bootstrap para facilitar grids e posicionamento.

## ⚡ JavaScript

- **script.js**: 
  - Gerencia o comportamento do menu de categorias e hover de departamentos.
  - Implementa dois carrosséis com botões de navegação e indicadores visuais (bolinhas).
  - Permite que o usuário veja resultados de busca em tempo real com `Buscar()`.

- **scriptMobile.js**: 
  - Focado no comportamento mobile, oculta/exibe elementos como logo e carrinho com base nas interações do usuário.
  - Melhora a experiência do campo de busca em dispositivos pequenos.

## 🚀 Destaques e Aprendizados

- **Carrosséis múltiplos**: Com botões de navegação e controle por bolinhas.
- **Menu dinâmico de categorias**: Com renderização baseada em dados JavaScript.
- **Layout responsivo**: Utilizando media queries dedicadas para diferentes dispositivos.
- **Animações e interatividade**: Proporcionam uma navegação intuitiva.

## 🎞 Animação com CSS

Este projeto marcou uma evolução no uso de animações com CSS e transições suaves. Propriedades como `transition`, `hover`, `transform` e `z-index` foram exploradas para dar dinamismo à página.

## 🌐 Funcionamento


- Pode haver pequenas variações de alinhamento entre navegadores.
- O projeto foi testado no **Google Chrome** 
- A versão responsiva está implementada e distribuída entre os arquivos CSS específicos.

## 📂 Estrutura do Projeto

```

├──  📄 README.md  → Documentação principal
├── 📂 img/ → imagem do projeto
├── 📂 index.html/ → Conteúdo HTML,Conteúdo da página
├── 📂 style.css/ → Conteúdo CSS, estilização da página
├── 📂 styleNotebook.css/ → Conteúdo CSS, estilização da página focado em Notebook
├── 📂 styleMobile.css/ → Conteúdo CSS, estilização da página focada em Mobile
├── 📂 script.js/ → Conteúdo JavaScript, Manipulador do DOM
├── 📂 scriptMobile.js/ → Conteúdo JavaScript, focado em interatividade para mobile

## 📌 Contribuição

Sinta-se à vontade para contribuir enviando um **Pull Request** ou abrindo uma **Issue**.

## 📜 Licença

Este projeto está sob a licença MIT.
