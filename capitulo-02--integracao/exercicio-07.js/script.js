const entradaNum1 = document.querySelector('#idText');
const entradaNum2 = document.querySelector('#idNumber');
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

const validarDados = (nomeMedicacao, valor) => {
  return nomeMedicacao.length > 0 && valor > 0;
};

const processarEnvio = (nomeMedicacao, valor) => {
  const desconto = valor - 0.5;
  mensagem.innerText = `Promoção da ${nomeMedicacao} - Leve dois por R$ ${(desconto * 2).toFixed(2)}`;
  saidaformulario.style.display = 'block';
};

const verificarDados = (e) => {
  e.preventDefault();

  const nome = entradaNum1.value.trim();
  const precoMedicacao = Number(entradaNum2.value);

  if (!validarDados(nome, precoMedicacao)) {
    mensagem.innerText = 'Insira valores válidos.';
    definirBorda(entradaNum1, nome.length > 0 ? 'green' : 'red');
    definirBorda(entradaNum2, precoMedicacao > 0 ? 'green' : 'red');
    saidaformulario.style.display = 'block';
    return;
  }

  definirBorda(entradaNum1, 'green');
  definirBorda(entradaNum2, 'green');
  processarEnvio(nome, precoMedicacao);
};

const limparCampos = () => {
  resetarCampo(entradaNum1);
  resetarCampo(entradaNum2);
  mensagem.innerText = '';
  saidaformulario.style.display = 'none';
};

btnEnviar.addEventListener('click', verificarDados);
btnLimpar.addEventListener('click', limparCampos);
