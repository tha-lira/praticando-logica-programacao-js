// Elementos do DOM
const input = document.getElementById('idNumber');
const outputResult = document.getElementById('output');
const buttonSubmit = document.getElementById('submitBtn');
const buttonReset = document.getElementById('clearBtn');
const resultBox = document.getElementById('card-footer');

// Captura o valor inserido no input e converte para número
const inputValue = () => Number(input.value);

// Função para verificar e mostrar mensagem de erro ou o dobro
const message = (e) => {
    e.preventDefault(); 

    const value = inputValue();
    outputResult.style.backgroundColor = 'white';

    if (isNaN(value) || value === 0) {
        outputResult.innerText = 'Por favor, insira um número válido.';
        outputResult.style.backgroundColor = '#ffe6e6'; // vermelho claro para erro
    } else {
        outputResult.style.backgroundColor = 'white'; // branco para sucesso
        showDouble(value);
    }

   resultBox.classList.add('visible');
};

// Mostra o dobro do valor capturado
const showDouble = (value) => {
    const doubledValue = value * 2;

    outputResult.innerText = `O valor adicionado foi: ${value}. E seu dobro é: ${doubledValue}`;
    clearInput();
};

// Limpa o campo de entrada 
const clearInput = () => {
    input.value = '';
};

// Limpa resultado e campo de entrada
const clearOutput = () => {
    outputResult.innerText = '';
    outputResult.style.backgroundColor = 'transparent';
    resultBox.classList.remove('visible'); 
    clearInput();
};

// Evento de clique no botão
buttonSubmit.addEventListener('click', message);
buttonReset.addEventListener('click', clearOutput);


/*

    Exemplo 1.5 - calculo do dobro de um número

    Elaborar um programa que leia um número.
    calcule o dobro desse numero. 
    
*/