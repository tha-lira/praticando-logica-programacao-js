// Elementos do DOM
const input01 = document.getElementById('idNum01');
const input02 = document.getElementById('idNum02');
const outputResult = document.getElementById('output');
const buttonSubmit = document.getElementById('submitBtn');
const buttonReset = document.getElementById('clearBtn');
const resultBox = document.getElementById('card-footer');

// Captura o valor inserido no input e converte para número
const inputValue01 = () => Number(input01.value);
const inputValue02 = () => Number(input02.value);

// Função para verificar e mostrar mensagem de erro ou o dobro
const message = (e) => {
    e.preventDefault(); 

    const value01 = inputValue01();
    const value02 = inputValue02();

    outputResult.style.backgroundColor = 'white';

    if (isNaN(value01) || value02 === 0) {
        outputResult.innerText = 'Por favor, insira um número válido.';
        outputResult.style.backgroundColor = '#ffe6e6'; // vermelho claro para erro
    } else {
        outputResult.style.backgroundColor = 'white'; // branco para sucesso
        showDouble(value01);
    }

    resultBox.classList.add('visible');

};

// Mostra o dobro do valor capturado
const showDouble = () => {
    const value01 = inputValue01();
    const value02 = inputValue02();

    const sumValue = value01 + value02;

    outputResult.innerText = `O resultado da soma dos nois numeros é: ${sumValue}`;
    
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

    Exemplo 1.6 - Soma de dois números
    
    Elabore um programa que leia dois numeros.
    calcule e informe a sima desses numeros 
    
*/