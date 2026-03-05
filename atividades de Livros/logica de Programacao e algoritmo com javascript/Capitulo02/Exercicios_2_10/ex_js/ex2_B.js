const frm = document.querySelector("form");
const resp = document.querySelector("#resposta");

frm.addEventListener("submit", (e) =>{
    const preco = Number(frm.inPreco.value);
    const tempo = Number(frm.inTempo.value);

    const TempoPorCadaMinutos =  Math.ceil(tempo / 15) * preco;

    resp.innerText = `Valor a Pagar R$: ${TempoPorCadaMinutos.toFixed(2)}`

    e.preventDefault()
});