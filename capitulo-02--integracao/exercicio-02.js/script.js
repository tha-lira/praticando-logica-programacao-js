// Seleção dos elementos do DOM (campos de entrada, botões e áreas de exibição)
const entradaTexto = document.querySelector('#idText');
const entradaNumero = document.querySelector('#idNumber');
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

// Função de validação: verifica se os dados são válidos (nome não vazio e duração numérica > 0)
const validarDados = (nome, duracao) => {
  return nome && !isNaN(duracao) && duracao > 0;
};

// Função principal de processamento: converte minutos para horas e minutos e exibe o resultado
const processarEnvio = (nome, duracao) => {
  const horas = Math.floor(duracao / 60);      // Parte inteira das horas
  const minutos = duracao % 60;                // Resto: minutos restantes
  mensagem.innerText = `${nome} - ${horas} hora(s) e ${minutos} minuto(s)`;
  saidaformulario.style.display = 'block';     // Exibe a área de resposta
};

// Função que lida com o clique no botão "Enviar"
const verificarDados = (e) => {
  e.preventDefault(); // Impede o envio real do formulário (recarregamento da página)

  const nomeFilme = entradaTexto.value.trim();         // Obtém o texto do campo
  const duracaoFilme = Number(entradaNumero.value);     // Converte a duração para número

  // Verifica se os dados são válidos
  if (!validarDados(nomeFilme, duracaoFilme)) {
    // Define mensagens e bordas dependendo de qual dado está inválido
    mensagem.innerText = !nomeFilme 
      ? 'Insira o nome do filme.' 
      : 'Insira uma duração válida em minutos.';

    definirBorda(entradaTexto, nomeFilme ? 'green' : 'red');
    definirBorda(entradaNumero, duracaoFilme > 0 ? 'green' : 'red');
    saidaformulario.style.display = 'block';
    return; // Interrompe a função se os dados forem inválidos
  }

  // Se válidos, aplica bordas verdes e processa os dados
  definirBorda(entradaTexto, 'green');
  definirBorda(entradaNumero, 'green');
  processarEnvio(nomeFilme, duracaoFilme);
};

// Função que lida com o clique no botão "Limpar"
const limparCampos = () => {
  // Reseta os campos de entrada
  resetarCampo(entradaTexto);
  resetarCampo(entradaNumero);
  mensagem.innerText = '';                       // Limpa a mensagem
  saidaformulario.style.display = 'none';        // Esconde o resultado
};

// Adiciona os event listeners aos botões
btnEnviar.addEventListener('click', verificarDados);
btnLimpar.addEventListener('click', limparCampos);

