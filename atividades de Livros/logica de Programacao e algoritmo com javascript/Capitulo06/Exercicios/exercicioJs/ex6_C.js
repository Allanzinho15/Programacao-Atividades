const frm = document.querySelector(`form`);
const resp = document.querySelector(`h3`);

const candidatos = []

frm.addEventListener(`submit`, (e) => {
    e.preventDefault();
    
    const nome = frm.inCandidato.value;
    const acertos = Number(frm.inAcerto.value);
    candidatos.push({nome, acertos});

    frm.reset()
    frm.inCandidato.focus()
    
    frm.btListar.dispatchEvent(new Event ("click"));
})

frm.btListar.addEventListener(`click`, () => { 
    
    const listar = candidatos.reduce((concatenar, candidato) => {
        return `${concatenar} ${candidato.nome} - ${candidato.acertos} acertos\n`
    }, "")
    
    resp.innerText = listar
    
})

frm.btAprovado.addEventListener(`click`, () =>{

    const notaAprovacao = Number(prompt(`Número de Acertos para Aprovação? `))

    const aprovados = candidatos.filter(candidato =>{
        return candidato.acertos >= notaAprovacao
    });
    
    if (aprovados.length == 0) {
        alert(`Não tem Candidatos Aprovados`);
    }

    if (notaAprovacao == 0 || isNaN(notaAprovacao)) {
    alert("Número inválido")
    return
    }

    let aprovado = ""
    aprovados.forEach(aprovados => {
        aprovado += `${aprovados.nome} - ${aprovados.acertos} acertos\n`        
    });
    resp.innerText = aprovado

});