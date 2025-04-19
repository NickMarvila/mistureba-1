function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}

function playSound(caminho) {
    const audio = new Audio(caminho);
    audio.play();
  
    //efeito tremor
    const imagem = event.currentTarget;
    imagem.classList.add('tremendo');
  
    // Remove tremor
    setTimeout(() => {
      imagem.classList.remove('tremendo');
    }, 300);
  }
     //modo festa
     function modoFesta() {
    setInterval(() => {
      document.body.style.backgroundColor =
        `hsl(${Math.floor(Math.random() * 360)}, 100%, 80%)`;
    }, 200);
  }
  


