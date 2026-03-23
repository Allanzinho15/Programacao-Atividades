//Coleta os dados do imput e h3 na pagina HTML
const frm = document.querySelector(`form`)
const resp1 = document.querySelector(`#outPut1`)
const resp2 = document.querySelector(`#outPut2`)


frm.addEventListener(`submit`, (e) => {
    e.preventDefault();

    //Lê os dados 
    const ladoA = Number(frm.inLadoA.value);
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);
    

    if(ladoA > ladoB + ladoC) {
        resp2.innerText = `Não pode Formar um Triângulo, Lado A é maior qua a soma de Lado B e C `
        frm.inLadoA.focus()

        return
    }

    if(ladoB > ladoA + ladoC) {
        resp2.innerText = `Não pode Formar um Triângulo, Lado B é maior qua a soma de Lado A e C `
        frm.inLadoB.focus()

        return
    }

    if(ladoC > ladoA + ladoB) {
        resp2.innerText = `Não pode Formar um Triângulo, Lado C é maior qua a soma de Lado A e B `
        frm.inLadoC.focus()

        return
    }
    else{
        resp1.innerText = `Lados podem formar um triángulo`

        if((ladoA == ladoB && ladoA != ladoC) || (ladoB == ladoA && ladoB != ladoC) || (ladoC == ladoA && ladoC != ladoB) || (ladoC == ladoB && ladoC != ladoA)) {
            resp2.innerText = `Tipo: Isósceles`
        }
        else if (ladoA == ladoB && ladoB == ladoC) {
            resp2.innerText = `Tipo: Equilátero`
            
        }
        else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) {
            resp2.innerText = `Tipo: Escaleno`
            
        }

    }

});