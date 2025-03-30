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
