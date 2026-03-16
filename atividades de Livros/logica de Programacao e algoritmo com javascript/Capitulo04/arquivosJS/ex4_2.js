//criando referencia do formulario e h3 
const frm = document.querySelector("form");
const resp = document.querySelector("h3");


//ouvinte do evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    //evita envio dor formuLrio
    e.preventDefault();

    //obtém os valores
    const nome = frm.inNome.value;
    const masculino = frm.inMasculino.checked;
    const altura = Number(frm.inAltura.value);


    //Opção alternativa
    // const peso = masculino ? 22 * Math.pow(altura, 2) :  21 * Math.pow(altura, 2);
    
    let peso //declara a variavel peso

    if (masculino) {//se for masculino (ou if masculino == true)
        peso = 22 * Math.pow(altura, 2); //math.pow eleva ao quadrado
    }
    else{
        peso = 21 * Math.pow(altura, 2)
    }
    

    //apresenta a resposta (altera o conteúdo do elemento h3 da página)
    resp.innerText = `${nome}: Seu Peso Ideal é ${peso.toFixed(2)}kg`
}); 

frm.addEventListener("reset", () => {
    resp.innerText = "" //limpa o conteúdo do elemento h3 que exibe a resposta 
})