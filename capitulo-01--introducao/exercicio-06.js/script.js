// === Seleciona elementos do HTML ===
const campoPrecoProduto = document.getElementById('idNum1'); // Campo onde o usuário digita o preço do produto
const campoQuantidadeParcelas = document.getElementById('idNum2'); // Campo onde o usuário digita o número de parcelas
const areaResultado = document.getElementById('output'); // Área onde o resultado será exibido
const botaoCalcular = document.getElementById('submitBtn'); // Botão para calcular
const botaoLimpar = document.getElementById('clearBtn'); // Botão para limpar
const rodapeResultado = document.getElementById('card-footer'); // Rodapé que mostra os resultados

const opcoesDesconto = document.querySelectorAll('input[name="true"]'); // Radio buttons para selecionar se é a primeira compra

// === Converte os valores de entrada para número ===
const obterPrecoProduto = () => Number(campoPrecoProduto.value);
const obterNumeroParcelas = () => Number(campoQuantidadeParcelas.value);

// === Função que valida os campos e chama o cálculo ===
const validarEntrada = (evento) => {
    evento.preventDefault();

    const preco = obterPrecoProduto();
    const parcelas = obterNumeroParcelas();

    if (isNaN(preco) || preco <= 0 || isNaN(parcelas) || parcelas <= 0) {
        areaResultado.innerText = 'Por favor, insira um número válido.';
        areaResultado.style.backgroundColor = '#ffe6e6'; // vermelho claro
    } else if (parcelas > 10) {
        areaResultado.innerText = 'Não é permitido parcelar em mais de 10 vezes.';
        areaResultado.style.backgroundColor = '#ffe6e6';
    } else {
        calcularPagamento(); // Tudo ok, segue para cálculo
    }

    rodapeResultado.classList.add('visible'); // Sempre mostra o resultado (erro ou não)
};


// === Função que calcula o desconto de 10% se for a primeira compra ===
const calcularDesconto = () => {
    const preco = obterPrecoProduto(); // valor original do produto
    const radioSelecionado = document.querySelector('input[name="true"]:checked');

    if (!radioSelecionado) {
        alert("Selecione se é sua primeira compra.");
        return 0; // Sem seleção, sem desconto
    }

    // Verifica se a opção selecionada é "sim"
    if (radioSelecionado.value.toLowerCase() === "sim") {
        return preco * 0.1; // Aplica 10% de desconto
    }

    return 0; // Se for "não", sem desconto
};

// === Função principal que faz o cálculo e mostra o resultado ===
const calcularPagamento = () => {
    const precoOriginal = obterPrecoProduto(); // Valor do produto
    const numeroParcelas = obterNumeroParcelas(); // Quantidade de parcelas

    const valorDesconto = calcularDesconto(); // Quanto será descontado
    const precoFinal = precoOriginal - valorDesconto; // Valor após desconto

    let mensagemExtra = '';

    if (numeroParcelas <= 10) {
        mensagemExtra += 'Pagamento até 10x\n';
    }

    const valorParcela = precoFinal / numeroParcelas; // Divide o valor final pelo número de parcelas

    // Monta o texto do resultado
    areaResultado.innerText =
        `Valor original: R$ ${precoOriginal.toFixed(2)}\n` +
        `Desconto: R$ ${valorDesconto.toFixed(2)}\n` +
        `Número de parcelas: ${numeroParcelas}\n` +
        `Valor por parcela: R$ ${valorParcela.toFixed(2)}\n` +
        mensagemExtra;

    areaResultado.style.backgroundColor = 'white'; // Cor padrão do resultado
    limparCampos(); // Limpa os campos depois de mostrar o resultado
};

// === Limpa os campos de entrada ===
const limparCampos = () => {
    campoPrecoProduto.value = '';
    campoQuantidadeParcelas.value = '';
};

// === Limpa tudo (resultado e campos) ===
const limparTudo = () => {
    areaResultado.innerText = '';
    areaResultado.style.backgroundColor = 'transparent';
    rodapeResultado.classList.remove('visible'); // Esconde o rodapé
    limparCampos();
};

// === Adiciona os eventos de clique nos botões ===
botaoCalcular.addEventListener('click', validarEntrada);
botaoLimpar.addEventListener('click', limparTudo);


/*
    Exemplo - programa para uma pizzaria

    Elaborar um programa para uma loja, 
    o qual leia o preço de um produto e informe
    as opções de pagamento da loja.
    calcule e inform o valor para pagamento a vista
    com 10% de desconto e o valor em 3x
*/
