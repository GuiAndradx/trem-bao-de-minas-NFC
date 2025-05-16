document.addEventListener("DOMContentLoaded", function () {
  console.log("Site Trem Bão de Minas carregado!");

  const wifiBtn = document.querySelector('a[href^="WIFI:"]');
  if (wifiBtn) {
    wifiBtn.addEventListener("click", () => {
      alert("Se a conexão não iniciar automaticamente, acesse as configurações de Wi-Fi do seu aparelho.");
    });
  }
});

let currentIndex = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

let startX = 0;
slides.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slides.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    nextSlide();
  } else if (endX - startX > 50) {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }
});

// Auto slide
setInterval(nextSlide, 5000);
