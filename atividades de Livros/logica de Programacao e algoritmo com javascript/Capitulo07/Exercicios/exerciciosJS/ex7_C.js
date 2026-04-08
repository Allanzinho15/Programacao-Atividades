const frm = document.querySelector(`form`);
const outResp_1 = document.querySelector(`#outResp-1`);
const outResp_2 = document.querySelector(`#outResp-2`);

frm.addEventListener(`submit`, (e) => {
    e.preventDefault();

    const inDate = frm.inData.value;
    const valor = Number(frm.inValor.value);

     
    const dataDaMulta = inDate.split("-");

    const data = new Date();
    data.setFullYear(Number(dataDaMulta[0]));
    data.setMonth(Number(dataDaMulta[1]) -1);
    data.setDate(Number(dataDaMulta[2]) + 90);

    const ano = data.getFullYear().toString()
    const mes = (data.getMonth() + 1).toString().padStart(2, 0)
    const dia = data.getDate().toString().padStart(2, 0)    
    

    const dataAtual = new Date();
    

    const valorComDesconto = valor - (valor * 0.20);

    if (dataAtual > data){
        alert(`O Prazo do Pagamento passou, O valor a ser Pago é integral de R$:${valor}`)
    }else{
        outResp_1.innerText = `Data Limite para Pagto com Desconto: ${dia}/${mes}/${ano}`
        outResp_2.innerText = `Valor com Desconto R$ ${valorComDesconto}`
    }

    
});
