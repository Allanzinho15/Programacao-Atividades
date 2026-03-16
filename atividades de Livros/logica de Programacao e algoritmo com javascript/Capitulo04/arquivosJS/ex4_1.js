//criar referencia ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//cria um "ouvinte" de evento, acionado quando o botão submit for cliclado
frm.addEventListener("submit", (e) => {
    //evita envio do form
    e.preventDefault();

    //obtém valores do form
    const nome = frm.inNome.value;
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);

    //calculo da media 
    const media = (nota1 + nota2) / 2

    resp1.innerText = `Média das notas  ${media.toFixed(2)}`

    //cria condição
    if(media >= 7){
        //alterando o estilo da cor do elemento resp2
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
        resp2.style.color = "blue"
    }
    else if(meida >= 4){
        resp2.innerText =`Atenção ${nome}. Você está em exame `
        resp2.style.color = "green"
    }
    else{
        resp2.innerText = `Ops ${nome}... Você foi reprovado(a)`
        resp2.style.color = "red"
    }

})