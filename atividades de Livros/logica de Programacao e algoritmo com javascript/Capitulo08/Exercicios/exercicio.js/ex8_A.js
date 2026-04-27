const frm = document.querySelector(`form`);
const resp1 = document.querySelector(`#outResp1`);
const resp2 = document.querySelector(`#outResp2`);


const retornarTracos = (texto) => {
    const nomeFormatado = texto.split(" ");
    let concatena = ""
    for (let i = 0; i <= nomeFormatado.length -1; i++) {
        concatena += "-".repeat(nomeFormatado[i].length).replace("", " ");
    }
    return concatena.trim()
}

const categoriazarAluno = (idade) => {
    let categoria = ""
    if (idade < 13) {categoria += "Infantil"}
    if (idade >= 13 && idade < 18) {categoria += "Juvenil"}
    if (idade >= 18) {categoria += "Adulto"}
    return categoria
}

frm.addEventListener(`submit`, (e) =>{
    e.preventDefault()
    const nome = frm.inNome.value;
    const idade = Number(frm.inIdade.value);
    resp1.innerText = `${nome.trim()}\n${retornarTracos(nome)}`
    resp2.innerText = `Categoria: ${categoriazarAluno(idade)}`
    frm.reset()
    frm.inNome.focus()
})