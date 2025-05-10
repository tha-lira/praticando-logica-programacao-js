//dom
const entrada = document.querySelector('#nome');
const mensagem = document.querySelector('.mensagem-envio'); 
const btnEnviar = document.querySelector('#btn-enviar');
const btnLimpar = document.querySelector('#btn-limpar');
const saidaformulario = document.querySelector('#resposta-formulario');

// Entrada de dados
const entradaDados = () => entrada.value.trim()

// Função
const  verificarDados = (event) => {
 event.preventDefault();

 const entradaUsuario = entradaDados()

 if(!entradaUsuario){
  mensagem.innerText = 'Insira um nome válido'
  entrada.style.border = "3px solid red";
  saidaformulario.style.display = 'block'

 } else{ 
  processarEnvio()
  entrada.style.border = "3px solid green";  
  saidaformulario.style.display = 'block'
 }
}

// Função para processar os dados inseridos e exibir a resposta
const processarEnvio = () => {
 const entradaUsuario = entradaDados();
 mensagem.innerText = `Olá ${entradaUsuario}, Bem-vindo(a)!`; // Exibe uma mensagem de boas-vindas
}

// Função para limpar os campos do formulário
const limparCampos = () => {
 saidaformulario.style.display = 'none';
 entrada.style.border = "1px solid #ccc"; 
 entrada.value = ""; 
 mensagem.innerText = ''; 
}

// Eventos para os botões
btnEnviar.addEventListener('click', verificarDados);
btnLimpar.addEventListener('click', limparCampos);