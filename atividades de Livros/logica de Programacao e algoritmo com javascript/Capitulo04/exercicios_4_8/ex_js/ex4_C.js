const frm = document.querySelector("form");
const respTempo = document.querySelector(".tempo");
const respTroco = document.querySelector(".troco");
const respVerificacao = document.querySelector(".verifica")


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = Number(frm.inValor.value);
    const m30 = 1;
    const m60 = 1.75;
    const m120 = 3
    
    let troco
    if (valor < m30) {
    alert("Valor Insuficiente (no mínimo, R$ 1.00)")
    frm.inValor.focus()
    return
}


    if (valor >= m30  && valor < m60) {
        troco = valor - m30;
        respTempo.innerText = `Tempo: 30 min`
        const semTroco = valor > m30 ? respTroco.innerText = `Troco R$ ${troco.toFixed(2)}` : respTroco.innerText = ` `
        
    }
    else if (valor >= m60 && valor < m120){
        troco = valor - m60;
        respTempo.innerText = `Tempo: 60 min`
        const semTroco = valor > m60 ? respTroco.innerText = `Troco R$ ${troco.toFixed(2)}` : respTroco.innerText = ` `  
    }
    else if (valor >= m120) {
        troco = valor - m120;
        respTempo.innerText =`Tempo: 120 min`
        const semTroco = valor > m120 ? respTroco.innerText = `Troco R$ ${troco.toFixed(2)}, Tempo Maximo 120 min`: respTroco.innerText = ` `
    }
    
})