const modal = document.querySelector('.modal');
const finalizarCompra = document.querySelector('.btn-finalizado');

jogoJson.map((jogo, index) => {
  const modeloItem = document.querySelector('.item').cloneNode(true);

  modeloItem.querySelector('img').src = jogo.img;
  modeloItem.querySelector('h2').innerHTML = jogo.nome;
  modeloItem.querySelector('.nota').innerHTML = 'MetaCritc: '+jogo.nota;
  modeloItem.querySelector('.preco').innerHTML = 'R$ '+jogo.preco;

  document.querySelector('main').append(modeloItem);
});

function clickBotao() {
  const nome = this.parentElement.querySelector('h2').innerText;
  modal.querySelector('h2').innerText = nome
  modal.style.opacity = 0
  modal.style.display = 'block'
  setTimeout(() => modal.style.opacity = 1 , 200)
}

const botoes = document.querySelectorAll('.btn');
botoes.forEach((item) => {
  item.addEventListener('click', clickBotao)
});

finalizarCompra.addEventListener('click', () => modal.style.display = 'none')