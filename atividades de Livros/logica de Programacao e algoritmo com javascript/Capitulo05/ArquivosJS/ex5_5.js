const frm = document.querySelector("form");//obtém elemento da pagina 
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let resposta = "" // string com a resposta a ser exibida
let numConta = 0 //inicializar o contador...
let valTotal = 0 //e acumulador (variavel globais)

frm.addEventListener("submit", (e) => { //"exuta" evento submit do form
    e.preventDefault();//evita envio do form

    const descricao = frm.inDescricao.value; //obtém os dados da conta
    const valor = Number(frm.inValor.value);

    numConta++ //adiciona valores ao contador e acumulador
    valTotal += valor //ou: valTotal += valor
    resposta = resposta + descricao + " - R$: " + valTotal.toFixed(2) + "\n"
    resp1.innerText = `${resposta}-------------------------------------`
    resp2.innerText = `${numConta} Contas(s) - Total R$: ${valTotal.toFixed(2)}`


    frm.inDescricao.value = `` //limpa compos do form
    frm.inValor.value = ``
    frm.inDescricao.focus() //posiciona no compo inDescricao do form

})
