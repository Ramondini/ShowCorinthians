let perguntaAtual = 1; // Define a pergunta atual como a primeira
let pontuacao = 0; // Inicializa a pontuação do jogador com 0

// Função que inicia o jogo
function iniciarJogo() {
  // Esconde o título do jogo (elemento com id 'mensagem-titulo')
  document.getElementById('mensagem-titulo').style.display = 'none'; 
  // Esconde o botão Iniciar (elemento com id 'botao-iniciar')
  document.getElementById('botao-iniciar').style.display = 'none'; 

  // Exibe o formulário do quiz (elemento com id 'formulario-quiz')
  document.getElementById('formulario-quiz').style.display = 'block';
  
  // Chama a função para mostrar a primeira pergunta
  mostrarPergunta();

  // Exibe o botão para ir para a próxima pergunta (elemento com id 'botao-proxima')
  document.getElementById('botao-proxima').style.display = 'inline-block';
}

// Função que vai para a próxima pergunta
function proximaPergunta() {
  // Obtém o elemento da pergunta atual usando o id 'pergunta' seguido do número da pergunta
  const perguntaAtualElement = document.getElementById(`pergunta${perguntaAtual}`);
  
  // Obtém a resposta selecionada pelo usuário para a pergunta atual
  const respostaSelecionada = document.querySelector(`input[name="pergunta${perguntaAtual}"]:checked`);
  
  // Verifica se uma resposta foi selecionada
  if (!respostaSelecionada) {
    alert("Por favor, selecione uma resposta antes de prosseguir!");
    return; // Não prossegue se nenhuma resposta for selecionada
  }
  
  // Define as respostas corretas para cada pergunta
  const respostasCorretas = {
    pergunta1: "Branquinho", // Resposta correta da primeira pergunta
    pergunta2: "José Ramos, 1912", // Resposta correta da segunda pergunta
    pergunta3: "Arena Corinthians, 2014", // Resposta correta da terceira pergunta
    pergunta4: "2000, Vasco da Gama", // Resposta correta da quarta pergunta
    pergunta5: "Corinthians 0 x 0 Palmeiras (vitória nos pênaltis)" // Resposta correta da quinta pergunta
  };

  // Se a resposta selecionada for a correta, incrementa a pontuação
  if (respostaSelecionada.value === respostasCorretas[`pergunta${perguntaAtual}`]) {
    pontuacao++;
  }

  // Esconde a pergunta atual
  perguntaAtualElement.style.display = 'none';
  // Incrementa o número da pergunta atual
  perguntaAtual++;

  // Verifica se já passou da última pergunta (pergunta 5)
  if (perguntaAtual > 5) {
    // Chama a função para mostrar o resultado do jogo
    mostrarResultado();
  } else {
    // Caso ainda haja perguntas, chama a função para mostrar a próxima
    mostrarPergunta();
  }
}

// Função que exibe a pergunta atual
function mostrarPergunta() {
  // Obtém o elemento da pergunta atual usando o id 'pergunta' seguido do número da pergunta
  const perguntaElement = document.getElementById(`pergunta${perguntaAtual}`);
  // Exibe o elemento da pergunta atual
  perguntaElement.style.display = 'block';
}

// Função que exibe o resultado final
function mostrarResultado() {
  // Obtém o elemento do resultado (id 'resultado')
  const resultadoElement = document.getElementById('resultado');
  // Exibe a pontuação no elemento com id 'pontuacao'
  document.getElementById('pontuacao').innerText = pontuacao;
  // Exibe o elemento do resultado
  resultadoElement.style.display = 'block';
  
  // Esconde o botão "próxima" após o fim do quiz
  document.getElementById('botao-proxima').style.display = 'none';
  
  // Exibe o botão "recomeçar" para reiniciar o jogo
  document.getElementById('botao-recomecar').style.display = 'inline-block';
}

// Função que reinicia o jogo
function recomecarJogo() {
  // Reseta a pontuação e a pergunta atual para o início
  pontuacao = 0;
  perguntaAtual = 1;
  
  // Esconde o resultado e limpa o formulário do quiz
  document.getElementById('resultado').style.display = 'none';
  document.getElementById('formulario-quiz').reset();
  
  // Exibe novamente o título do jogo
  document.getElementById('mensagem-titulo').style.display = 'block';
  // Exibe o botão "Iniciar" novamente
  document.getElementById('botao-iniciar').style.display = 'inline-block';
  // Exibe o cabeçalho de início
  document.getElementById('header-iniciar').style.display = 'block'; // Mostra novamente o cabeçalho
}
