// Elementos do DOM
const input1 = document.getElementById('idNum1');
const input2 = document.getElementById('idNum2');
const outputResult = document.getElementById('output');
const buttonSubmit = document.getElementById('submitBtn');
const buttonReset = document.getElementById('clearBtn');
const resultBox = document.getElementById('card-footer');

// Captura o valor inserido no input e converte para número
const inputValue1 = () => Number(input1.value);
const inputValue2 = () => Number(input2.value);

// Função para verificar e mostrar mensagem de erro ou vizinhos
const message = (e) => {
    e.preventDefault(); 

    const value1 = inputValue1();
    const value2 = inputValue2();

    if (isNaN(value1) || value1 <= 0 || isNaN(value2) || value2 <= 0) {
        outputResult.innerText = 'Por favor, insira um número válido.';
        outputResult.style.backgroundColor = '#ffe6e6';
    } else {
        calculoPizza(); // Mostra o cálculo
    }

    resultBox.classList.add('visible'); // Mostra o footer sempre que há uma mensagem
};

// calculo da divisão da conta
const calculoPizza = (value) => {

    const pizza = inputValue1();
    const quantidade = inputValue2();

    const total = pizza / quantidade

    outputResult.innerText = `Valor da pizza: R$ ${pizza.toFixed(2)} \n Dividido entre ${quantidade} pessoa(s) \n Cada um paga: R$ ${total.toFixed(2)}`;
    outputResult.style.backgroundColor = 'white';
    clearInput();
};

// Limpa o campo de entrada 
const clearInput = () => {
    input1.value = '';
    input2.value = '';
};

// Limpa resultado e campo de entrada
const clearOutput = () => {
    outputResult.innerText = '';
    outputResult.style.backgroundColor = 'transparent';
    resultBox.classList.remove('visible'); // Oculta totalmente
    clearInput();
};

// Evento de clique nos botões
buttonSubmit.addEventListener('click', message);
buttonReset.addEventListener('click', clearOutput);

/*
    Exemplo 1.9 - programa para uma pizzaria

    Elaborar um programa para uma pizzaria,
    qual leia o valor total de uma conta e
    quantos clientes vão paga-lá
*/
