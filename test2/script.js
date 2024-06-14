function calculateResult() {
    var expression = document.querySelector('.screen').value;
    if (expression) {
      try {
        var result = eval(expression);
        document.querySelector('.screen').value = result;
      } catch (error) {
        document.querySelector('.screen').value = 'Erro';
      }
    }
  }
  
  function clearScreen() {
    document.querySelector('.screen').value = '';
  }
  
  function changeSign() {
    var currentValue = document.querySelector('.screen').value;
  
    if (currentValue) {
      if (currentValue.startsWith('-')) {
        document.querySelector('.screen').value = currentValue.slice(1);
      } else {
        document.querySelector('.screen').value = '-' + currentValue;
      }
    }
  }
  
  function calculateSquareRoot() {
    var currentValue = document.querySelector('.screen').value;
    if (currentValue) {
      var result = Math.sqrt(parseFloat(currentValue));
      document.querySelector('.screen').value = result;
    }
  }
  
  function appendNumber(number) {
    document.querySelector('.screen').value += number;
  }
  
  function appendOperator(operator) {
    var currentValue = document.querySelector('.screen').value;
    if (currentValue) {
      if (operator === '+/-') {
        changeSign(); // Chamada para a função changeSign aprimorada
      } else {
        document.querySelector('.screen').value += operator;
      }
    }
  }
  
  function calculatePercentage() {
    var currentValue = document.querySelector('.screen').value;
    if (currentValue) {
      document.querySelector('.screen').value = parseFloat(currentValue) / 100;
    }
  }
  