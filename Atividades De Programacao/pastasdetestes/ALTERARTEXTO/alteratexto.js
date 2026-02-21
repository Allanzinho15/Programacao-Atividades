const paragrafo = document.getElementById('meuParagrafo');
const botao = document.getElementById('meuBotao');


botao.addEventListener('click', function() {
    if (paragrafo.textContent === 'Texto original') {
      paragrafo.textContent = 'Texto alterado'
    } else {
      paragrafo.textContent = 'Texto original'
    }
  })
