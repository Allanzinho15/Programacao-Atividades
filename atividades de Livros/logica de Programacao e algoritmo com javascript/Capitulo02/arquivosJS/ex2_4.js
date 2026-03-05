//criar uam referencia ao form e ao elemento h3 (onde será exibita a resposta)
const frm = document.querySelector("form");
const resp = document.querySelector("h3");
//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) =>{
    //obtém conteúdo dos campos do formulario
    const quilo = Number(frm.inQuilo.value);
    const comsumo = Number(frm.inComsumo.value);

    const valor = (quilo / 1000) * comsumo;// calcula o valor a ser pago por pessoa
    resp.innerText = `valor a pagar R$: ${valor.toFixed(2)}` //exibe resposta

    e.preventDefault() //evita o envio do form
});