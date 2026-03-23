
//obtém elemento da pagina 
const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//escuta evento submit do form
frm.addEventListener("submit", (e) => {
    e.preventDefault()//evita o envio dor form

    const numero = Number(frm.inNumero.value); //obtém número informado

    let = resposta = "" //variavel do tipo string, para concatenar a resposta
    
    //criar um laço de repetição (i começa em 1 e é incrementado até 10) 
    for(let i = 1; i <= 10; i++){

        //a variavel resposta vai acumular os novos conteúdos (nos 2 formatos)
        resposta = resposta + numero + " X " + i + " = " + (numero * i ) + "\n"
        //resposta = `${resposta}${numero} x ${i} = ${numero * i} \n`
    }
    resp.innerText = resposta
})