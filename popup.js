document.addEventListener("DOMContentLoaded", function () {
  // Executa quando o DOM da página é totalmente carregado
  var title = document.querySelector("h1");

  // Adiciona um evento de clique ao título
  title.addEventListener("click", function () {
    alert("Clicou no título da Evil Extension!");
  });
});
