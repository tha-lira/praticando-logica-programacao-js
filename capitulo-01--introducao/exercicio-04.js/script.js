// Elementos do DOM
const input = document.getElementById('idNum');
const outputResult = document.getElementById('output');
const buttonSubmit = document.getElementById('submitBtn');
const buttonReset = document.getElementById('clearBtn');
const resultBox = document.getElementById('card-footer');

// Captura o valor inserido no input e converte para número
const inputValue = () => Number(input.value);

// Função para verificar e mostrar mensagem de erro ou vizinhos
const message = (e) => {
    e.preventDefault(); 

    const value = inputValue();

    outputResult.style.backgroundColor = 'white';

    if (isNaN(value) || value === 0) {
        outputResult.innerText = 'Por favor, insira um número válido.';
        outputResult.style.backgroundColor = '#ffe6e6';
    } else {
        outputResult.style.backgroundColor = 'white';
        showVizinhos(value);
    }

    resultBox.classList.add('visible');
};

// Mostra o número anterior e posterior
const showVizinhos = (value) => {
    const anterior = value - 1;
    const posterior = value + 1;

    outputResult.innerText = `Número informado: ${value} Vizinhos: ${anterior} e ${posterior}`;
    outputResult.style.backgroundColor = 'white';
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
    Exemplo 1.8 - informe os seus vizinhos
    
    Elaborar um programa que leia um número.
    Calcule e informe os seus vizinhos, ou seja.
    o numero anterior e posterios
*/