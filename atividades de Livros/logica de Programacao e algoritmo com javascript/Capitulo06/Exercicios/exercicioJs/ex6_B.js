const frm = document.querySelector(`form`); //
const reps1 = document.querySelector(`h3`);
const resp2 = document.querySelector(`pre`);

const numero = []
frm.addEventListener(`submit`, (e) => {
    e.preventDefault();
    
    const num = Number(frm.inNumero.value);
    if(numero.includes(num)){
        alert(`Esse Núnero ja Exite`)
        frm.reset()
        frm.inNumero.focus()
        return
    }

    numero.push(num);

    const exibir = numero.join(", ")
    let mostrar = ""
    for (const exibi of exibir) {
        mostrar += exibi
    }

    frm.reset();
    frm.inNumero.focus();
    reps1.innerText = `Números: ${mostrar}`
});

frm.btOrdem.addEventListener(`click`, () =>{
    const numeroCopia = numero.slice();
    numeroCopia.sort((a, b) => a - b);

    if (numero.join(", ") == numeroCopia.join(", ")) {
        resp2.innerText = `O Número estão em ordem crescente`
    }else{
        
        resp2.innerText = `Atenção... Número não estão em ordem crescente`
    }

    
})

