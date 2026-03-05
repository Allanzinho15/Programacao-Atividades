
//cria referencia ao form e oas elementos h3 e h4 (resposta)
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");


//criar um ouvinte de evento, acionando quando o botão submit for clicado
frm.addEventListener("submit", (e) =>{
    const titulo = frm.inTitulo.value; // obtém conteúdo dos formulario
    const duracao = Number(frm.inDuracao.value);

    const horas = Math.floor(duracao / 60);// arredonda para baixo
    const minuto = duracao % 60; // obtém o resto da divisão

    resp1.innerText = titulo;
    resp2.innerText = `${horas} horas(s) e ${minuto} minutos(s)`;

    e.preventDefault(); //evita envio do form
});