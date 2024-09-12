// Efeito de digitação e reescrita contínua
const textElement = document.querySelector('.typing-text');
const text = 'Seja bem-vindo ao meu site!';
let index = 0;
let deleting = false; // Variável para controlar o apagar

function type() {
  if (deleting) {
    // Apaga o texto
    textElement.textContent = text.substring(0, index);
    index--;
    
    // Quando todo o texto é apagado, reinicia a digitação
    if (index < 0) {
      deleting = false;
      setTimeout(type, 500); // Pausa antes de começar a digitar novamente
    } else {
      setTimeout(type, 100);
    }
  } else {
    // Digita o texto
    textElement.textContent = text.substring(0, index);
    index++;
    
    // Quando todo o texto é digitado, inicia o apagar
    if (index > text.length) {
      deleting = true;
      setTimeout(type, 1000); // Pausa antes de começar a apagar
    } else {
      setTimeout(type, 100);
    }
  }
}

type();
