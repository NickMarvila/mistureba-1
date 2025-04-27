function trocaModoEscuro() {
    const body = document.body;
    const botao = document.getElementById('botaoModo');

    body.classList.toggle('modo-escuro');

    if (body.classList.contains('modo-escuro')) {
        botao.textContent = 'Modo Claro';
    } else {
        botao.textContent = 'Modo Escuro';
    }
}

function modoCaralho() {
    // Fundo piscando
    setInterval(() => {
      document.body.style.backgroundColor =
        `hsl(${Math.floor(Math.random() * 360)}, 100%, 85%)`;
    }, 200);
  
    // Som de fundo
    const audio = new Audio('./sound/fla.mp3');
    audio.play();
  
    // Confete explodindo
    setInterval(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1000);
  
    // Imagens girando e tremendo
    const quadrados = document.querySelectorAll('.quadrado img');
  
    quadrados.forEach(img => {
      img.style.transition = "transform 0.2s ease";
      img.style.animation = "gira 1s infinite linear, tremor 0.3s infinite";
    });
  
    alert("🚨 MODO CARALHO ATIVADO! Prepare-se.");
  }
  
  function playSound(caminho) {
    const audio = new Audio(caminho);
    audio.play();
  
    // Efeito de tremor temporário
    const alvo = event.currentTarget;
    alvo.classList.add('tremendo');
  
    setTimeout(() => {
      alvo.classList.remove('tremendo');
    }, 300);
  }