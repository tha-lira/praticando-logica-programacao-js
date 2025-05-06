// Elementos do DOM
const input = document.getElementById('idNum');
const outputResult = document.getElementById('output');
const buttonSubmit = document.getElementById('submitBtn');
const buttonReset = document.getElementById('clearBtn');
const resultBox = document.getElementById('card-footer');

// Captura o valor inserido no input e converte para número
const inputValue = () => Number(input.value);

// Calcula a taxa de 10%
const calculateTaxa = (value) => value * 0.1;

// Função para verificar e mostrar mensagem de erro ou o total com taxa
const message = (e) => {
    e.preventDefault(); 

    const value = inputValue();

    outputResult.style.backgroundColor = 'white';

    if (isNaN(value) || value === 0) {
        outputResult.innerText = 'Por favor, insira um número válido.';
        outputResult.style.backgroundColor = '#ffe6e6'; // vermelho claro para erro
    } else {
        outputResult.style.backgroundColor = 'white'; // branco para sucesso
        showTotalComTaxa(value);
    }

    resultBox.classList.add('visible');
};

// Mostra o valor total com taxa
const showTotalComTaxa = (value) => {
    const taxa = calculateTaxa(value);
    const total = value + taxa;

    outputResult.innerText = `Taxa (10%): R$ ${taxa.toFixed(2)} Total: R$ ${total.toFixed(2)}`;

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

// Evento de clique nos botões
buttonSubmit.addEventListener('click', message);
buttonReset.addEventListener('click', clearOutput);



/*
    Exemplo 1.7 - Soma de dois números
    
    Elabore um programa que leia o valor de um jantar.
    calcule e informe o valor de taxa de 10% e o valor total a ser pago
*/