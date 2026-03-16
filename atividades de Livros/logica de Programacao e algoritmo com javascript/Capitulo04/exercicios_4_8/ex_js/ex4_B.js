const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const velocidadePermitida = Number(frm.inVelocidadePermitida.value);
    const velocidadeComdutor = Number(frm.inVelocidadeComdutor.value);
    const multaLeve = velocidadePermitida + (velocidadePermitida * 0.20);
    

    if(velocidadeComdutor <= velocidadePermitida){
        resp.innerText = `Sem Multa`
    }
    else if (velocidadeComdutor <= multaLeve) {
        resp.innerText = `Multa Leve`
        
    } else {
        resp.innerText = `Multa Grave`
        
    }   
})