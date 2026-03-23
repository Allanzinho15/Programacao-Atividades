//coleta as tags direto do DOM
const frm = document.querySelector(`form`);
const resp = document.querySelector(`h3`);


frm.addEventListener(`submit`, (e) =>{
    e.preventDefault();

    const fruta = frm.inFruta.value;
    const num = Number(frm.inNumero.value);

    let exibirFruta = " "
    for(let i = 1; i <= num; i++){
    
        if(i < num){
            exibirFruta = `${exibirFruta}  ${fruta} *`
            resp.innerText = exibirFruta
        }
        else if(i == num){
            exibirFruta = `${exibirFruta}  ${fruta}`
            resp.innerText = exibirFruta
        }
    }

    
})
