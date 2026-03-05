
// criando constantes para coletar dos dados do formulario e para fazer a exibição nos h3
const frm = document.querySelector("form");
const resp1 = document.querySelector("#resposta1");
const resp2 = document.querySelector("#resposta2");

//criando botao do submit
frm.addEventListener("submit", (e) =>{ 
    const preco = Number(frm.inPreco.value);
    const medicamento = frm.inMedicamento.value;

    /*preço do medicamento arredondado para baixo, retirando os centavos como desconto, acima da compra de dois produtos iguais*/
    const precoComDesconton = Math.floor(preco * 2) ; 

    //exebindo valor da promoção com desconto
    resp1.innerText = `Promoção de ${medicamento}`;
    resp2.innerText = `Leve 2 por apenas  R$: ${precoComDesconton.toFixed(2)}`;

    e.preventDefault();

    
});