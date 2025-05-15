const entradaUsuario01 = document.querySelector('#idEntrada01'); // valor da tarifa
const entradaUsuario02 = document.querySelector('#idEntrada02'); // tempo em minutos
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

const validarDados = (valor, tempo) => {
  return valor > 0 && tempo > 0;
};

const processarEnvio = (valor, tempo) => {
  const intervalos = Math.ceil(tempo / 15); // cada 15 min
  const calculo = intervalos * valor;

  mensagem.innerText = `Valor a pagar: R$ ${calculo.toFixed(2)}`;
  saidaformulario.style.display = 'block';
};

const verificarDados = (e) => {
  e.preventDefault();

  const valor = Number(entradaUsuario01.value);
  const tempo = Number(entradaUsuario02.value);

  if (!validarDados(valor, tempo)) {
    mensagem.innerText = 'Insira valores válidos (maiores que zero).';
    definirBorda(entradaUsuario01, valor > 0 ? 'green' : 'red');
    definirBorda(entradaUsuario02, tempo > 0 ? 'green' : 'red');
    saidaformulario.style.display = 'block';
    return;
  }

  definirBorda(entradaUsuario01, 'green');
  definirBorda(entradaUsuario02, 'green');
  processarEnvio(valor, tempo);
};

const limparCampos = () => {
  resetarCampo(entradaUsuario01);
  resetarCampo(entradaUsuario02);
  mensagem.innerText = '';
  saidaformulario.style.display = 'none';
};

btnEnviar.addEventListener('click', verificarDados);
btnLimpar.addEventListener('click', limparCampos);
