//cria referencia dos elemento form e h3
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();//evita envio do formulario
    //ouvinte  de evento, acionar quando o botão submit é clicado
    const horaBrasil = Number(frm.inHoraBrasil.value)
    let horaFranca = horaBrasil + 5 //calcula o horario
    
    if(horaFranca > 24){//verifica de o horario da frança é maior que 24horas 
        horaFranca -= 24 //subtrai 24 
    };
    //exibe a resposta (alterando o conteudo do elemento h3)
    resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`
})