//criar referencia ao formularioe os elementos de resposta(pelo ID)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");


//criar um ouvinte de evento, adicionar quando o botão submit for clicado

frm.addEventListener("submit", (e) => {

    //obtém o conteúdo dos compos
    const veiculo = frm.inVeiculo.value;
    const preco = Number(frm.inPreco.value);
    
    //calcula o valor da entrada de 50% do valor dado no carro
    const entrada = preco * 0.50;

    //calcula o valor das parcelas dos 50% que sobrou
    const parcela = (preco * 0.50) / 12

    resp1.innerText = `Promoção: ${veiculo}`;
    resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`
    resp3.innerText = `+12X de R$ ${parcela.toFixed(2)}`

    e.preventDefault();

})