const frm = document.querySelector("form");
const resp1 = document.querySelector("#resposta1");
const resp2 = document.querySelector("#resposta2");

frm.addEventListener("submit", (e) => {
  const produto = frm.inProduto.value;
  const preco = Number(frm.inPreco.value);

  const precoDosDoisProduto = preco * 2; 
  const precoDoterceiroComPromocao = preco * 0.50;
  const precoDaPromocaoDosTresproduto = precoDosDoisProduto + precoDoterceiroComPromocao;

  resp1.innerText = `${produto}-Promoção: Leve 3 por R$: ${precoDaPromocaoDosTresproduto.toFixed(2)}`;

  resp2.innerText = `O 3 produto Custa apenas R$: ${precoDoterceiroComPromocao.toFixed(2)}`;

  e.preventDefault();
});
