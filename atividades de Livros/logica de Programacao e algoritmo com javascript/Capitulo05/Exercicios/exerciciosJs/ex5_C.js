const frm = document.querySelector(`form`);
const resp1 = document.querySelector(`#outResp1`);
const resp2 = document.querySelector(`#outResp2`);

frm.addEventListener(`submit`, (e) => {
    e.preventDefault();

    const num = Number(frm.inNumero.value);

    let exibir = "Divisores do " + num + ": 1"
    let conNum = 1

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            exibir += ", " + i
            conNum += i   
        }   
    }
    exibir += " (Soma: " + conNum + ")"

    resp1.innerText = exibir
    
    if (num == conNum) {
        resp2.innerText = `${num} É um Número Perfeito`
    } else {
        resp2.innerText = `${num} Nào é um Número Perfeito`
    }
})