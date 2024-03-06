document.title = "Minha Extensão no Google";

// Adiciona um estilo para colocar uma imagem de fundo
var style = document.createElement("style");
style.textContent =
  'body { background-image: url("caminho/para/sua/imagem.jpg") !important; color: #fff !important; }';
document.head.appendChild(style);
