let perguntaAtual = 1;
let pontuacao = 0;

function iniciarJogo() {
  document.getElementById('mensagem-titulo').style.display = 'none'; // Esconde o título
  document.getElementById('botao-iniciar').style.display = 'none'; // Esconde o botão Iniciar
 

  document.getElementById('formulario-quiz').style.display = 'block';
  mostrarPergunta();

  document.getElementById('botao-proxima').style.display = 'inline-block';
}

function proximaPergunta() {
  const perguntaAtualElement = document.getElementById(`pergunta${perguntaAtual}`);
  
  const respostaSelecionada = document.querySelector(`input[name="pergunta${perguntaAtual}"]:checked`);
  
  if (respostaSelecionada) {
    const respostasCorretas = {
      pergunta1: "Branquinho",
      pergunta2: "José Ramos, 1912",
      pergunta3: "Arena Corinthians, 2014",
      pergunta4: "2000, Vasco da Gama",
      pergunta5: "Corinthians 0 x 0 Palmeiras (vitória nos pênaltis)"
      
    };

    if (respostaSelecionada.value === respostasCorretas[`pergunta${perguntaAtual}`]) {
      pontuacao++;
    }
  }

  perguntaAtualElement.style.display = 'none';
  perguntaAtual++;

  if (perguntaAtual > 5) {
    mostrarResultado();
  } else {
    mostrarPergunta();
  }
}

function mostrarPergunta() {
  const perguntaElement = document.getElementById(`pergunta${perguntaAtual}`);
  perguntaElement.style.display = 'block';
}

function mostrarResultado() {
  const resultadoElement = document.getElementById('resultado');
  document.getElementById('pontuacao').innerText = pontuacao;
  resultadoElement.style.display = 'block';
  
  document.getElementById('botao-proxima').style.display = 'none';
  
  document.getElementById('botao-recomecar').style.display = 'inline-block';
}

function recomecarJogo() {
  pontuacao = 0;
  perguntaAtual = 1;
  document.getElementById('resultado').style.display = 'none';
  document.getElementById('formulario-quiz').reset();
  
  document.getElementById('mensagem-titulo').style.display = 'block';
  document.getElementById('botao-iniciar').style.display = 'inline-block';
  document.getElementById('header-iniciar').style.display = 'block'; // Mostra novamente o cabeçalho
}
