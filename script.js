document.addEventListener("DOMContentLoaded", function () {
  console.log("Site Trem Bão de Minas carregado!");

  const wifiBtn = document.querySelector('a[href^="WIFI:"] button');
  if (wifiBtn) {
    wifiBtn.addEventListener("click", () => {
      alert("Se a conexão não iniciar automaticamente, acesse as configurações de Wi-Fi do seu aparelho.");
    });
  }
});
