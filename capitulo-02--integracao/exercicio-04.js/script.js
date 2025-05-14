const entradaNum1 = document.querySelector('#idQuilo');
const entradaNum2 = document.querySelector('#idConsumo');

const btnEnviar = document.querySelector('#btn-enviar');
const btnLimpar = document.querySelector('#btn-limpar');

const mensagem = document.querySelector('.mensagem-envio');
const saidaformulario = document.querySelector('#resposta-formulario');

const definirBorda = (elemento, cor) => {
  elemento.style.border = `3px solid ${cor}`;
};

const resetarCampo = (elemento) => {
  elemento.value = '';
  elemento.style.border = '1px solid #ccc';
};

const validarDados = (precoQuilo, valorConsumido) => {
  return precoQuilo > 0 && valorConsumido > 0;
};

const processarEnvio = (precoQuilo, valorConsumido) => {
  const saldo = precoQuilo * valorConsumido; 
  mensagem.innerText = `Total a pagar: R$ ${saldo.toFixed(2)}`;
  saidaformulario.style.display = 'block';
};

const verificarDados = (e) => {
  e.preventDefault();

  const quilo = Number(entradaNum1.value);
  const consumoCliente = Number(entradaNum2.value);

  if (!validarDados(quilo, consumoCliente)) {
    mensagem.innerText = 'Insira valores válidos (maiores que zero).';
    definirBorda(entradaNum1, quilo > 0 ? 'green' : 'red');
    definirBorda(entradaNum2, consumoCliente > 0 ? 'green' : 'red');
    saidaformulario.style.display = 'block';
    return;
  }

  definirBorda(entradaNum1, 'green');
  definirBorda(entradaNum2, 'green');
  processarEnvio(quilo, consumoCliente);
};

const limparCampos = () => {
  resetarCampo(entradaNum1);
  resetarCampo(entradaNum2);
  mensagem.innerText = '';
  saidaformulario.style.display = 'none';
};

btnEnviar.addEventListener('click', verificarDados);
btnLimpar.addEventListener('click', limparCampos);
