// Seleção dos elementos do DOM (campos de entrada, botões e áreas de exibição)
const entradaTexto = document.querySelector('#idVeiculo');
const entradaNumero = document.querySelector('#idTotal');

const btnEnviar = document.querySelector('#btn-enviar');
const btnLimpar = document.querySelector('#btn-limpar');

const mensagem = document.querySelector('.mensagem-envio');
const saidaformulario = document.querySelector('#resposta-formulario');

// Função utilitária: define a borda de um campo com base na cor passada
const definirBorda = (elemento, cor) => {
  elemento.style.border = `3px solid ${cor}`;
};

// Função utilitária: reseta o campo (valor e borda)
const resetarCampo = (elemento) => {
  elemento.value = '';
  elemento.style.border = '1px solid #ccc';
};

// Função de validação: verifica se os dados são válidos (nome não vazio e valor numérico > 0)
const validarDados = (nomeVeiculo, valorVeiculo) => {
  return nomeVeiculo && !isNaN(valorVeiculo) && valorVeiculo > 0;
};

// Função de processamento: calcula entrada e parcelas e exibe a promoção
const processarEnvio = (nomeVeiculo, valorVeiculo) => {
  
  const entrada = valorVeiculo * 0.50; // 50% de entrada
  const saldo = valorVeiculo - entrada;
  const parcela = saldo / 12; // 12 parcelas do saldo restante

  mensagem.innerText = `Promoção ${nomeVeiculo} - Entrada R$ ${entrada.toFixed(2)} + 12x de R$ ${parcela.toFixed(2)}`;
  saidaformulario.style.display = 'block';
};

// Função que lida com o clique no botão "Enviar"
const verificarDados = (e) => {
  e.preventDefault(); // Evita recarregar a página

  const nome = entradaTexto.value.trim();         // Pega o nome do veículo
  const preco = Number(entradaNumero.value);      // Converte o valor para número

  if (!validarDados(nome, preco)) {
    // Mensagem de erro personalizada
    mensagem.innerText = !nome
      ? 'Insira o nome do veículo.'
      : 'Insira um valor válido para o veículo.';

    // Destaca campos com erro
    definirBorda(entradaTexto, nome ? 'green' : 'red');
    definirBorda(entradaNumero, preco > 0 ? 'green' : 'red');
    saidaformulario.style.display = 'block';
    return;
  }

  // Se válidos, destaca e processa
  definirBorda(entradaTexto, 'green');
  definirBorda(entradaNumero, 'green');
  processarEnvio(nome, preco);
};

// Função para limpar o formulário e resetar a interface
const limparCampos = () => {
  resetarCampo(entradaTexto);
  resetarCampo(entradaNumero);
  mensagem.innerText = '';
  saidaformulario.style.display = 'none';
};

// Eventos nos botões
btnEnviar.addEventListener('click', verificarDados);
btnLimpar.addEventListener('click', limparCampos);


