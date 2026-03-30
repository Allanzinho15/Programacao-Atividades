const frm = document.querySelector(`form`);
const resp = document.querySelector(`pre`);

const clubes = [];

frm.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const nomeClubes = frm.inClube.value;
    clubes.push(nomeClubes);
    frm.btLista.dispatchEvent(new Event(`click`));
    frm.reset();
    frm.inClube.focus();
    
});

frm.btLista.addEventListener(`click`, () => {
    if(clubes.length == 0){
        alert(`Não há clubes na lista...`)
        inClube.focus()
        return
    }
    let lista = "";
    clubes.forEach(listas => {
        lista += `${listas}\n`;
    });
    resp.innerText = lista;
});

frm.btTabela.addEventListener(`click`, () => {
    let listaTime = "";
    const copiaClube = [...clubes]
    if (copiaClube.length % 2 == 0) {
        while (copiaClube.length > 0) {
            const inicioClube = copiaClube.shift()
            const fimClube = copiaClube.pop()
            listaTime += `${inicioClube} X ${fimClube}\n`
        }        
    }else{
        alert(`Não Podemos exibir a Tabela, pois a quantidades de jogadores tem que ser Par`)
    }
    
    resp.innerText = listaTime
});