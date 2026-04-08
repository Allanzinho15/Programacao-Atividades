const situacao = (nota, media) =>{
    if (nota >= media){
        alert(`Aprovado`)
    }else{
        alert(`Reprovado`)
    }
}

const prova = Number(prompt("Qual Nota: "));

situacao(prova, 7)