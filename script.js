document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio");
  const playPause = document.getElementById("playPause");
  const progresso = document.getElementById("barra-progresso");
  const tempoAtual = document.getElementById("tempo-atual");
  const tempoTotal = document.getElementById("tempo-total");
  const imagemGirando = document.getElementById("imagemGirando");

  if (!audio || !playPause || !progresso || !tempoAtual || !tempoTotal || !imagemGirando) {
    console.warn("Algum elemento do player não foi encontrado.");
    return;
  }

  audio.addEventListener("loadedmetadata", () => {
    tempoTotal.textContent = formatarTempo(audio.duration);
  });

  playPause.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playPause.textContent = "⏸";
    } else {
      audio.pause();
      playPause.textContent = "▶";
    }
  });

  audio.addEventListener("timeupdate", () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progresso.style.width = percent + "%";
    tempoAtual.textContent = formatarTempo(audio.currentTime);
  });

  function formatarTempo(segundos) {
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
  }

  // Imagens giratórias
  const imagens = ["img1.jpg", "img2.jpg", "img5.jpg", "img4.jpg","img6.jpg"];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % imagens.length;
    imagemGirando.style.backgroundImage = `url(${imagens[index]})`;
  }, 4000);
});