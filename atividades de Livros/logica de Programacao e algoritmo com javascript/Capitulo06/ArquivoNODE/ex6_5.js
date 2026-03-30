const prompt = require(`prompt-sync`)();

console.log("informe os alunos. Após, digite `Fim` no nome para sair");
const alunos = [] //declara vetor

do {
    const nome = prompt("Nome: "); //lê o nome
    if (nome == "Fim") { //antes de ler a nota vetor de objetos
        break
    }

    const nota = Number(prompt("Nota: "));//lê nota
    alunos.push({nome, nota}); //adiciona dados ao vetor de objetos
    console.log(`ok! Aluno(a) cadastrado(a)...`);
} while (true);

    console.log("-".repeat(40)); //exibe 40 vezes " - " 

const maior = alunos.reduce((a, b) => { // obtem o maior numero 
    return Math.max(a, b.nota)
}, 0);
console.log(`Maior Nota: ${maior}`); //exibe o maior nota 
if (maior >= 7){//para verificar se tem destaque na turma
    const destaques = alunos.filter((aluno) => {// filtro
        return  aluno.nota == maior
    })
        destaques.forEach((destaque) =>{
            console.log(`- ${destaque.nome}`)
        })
}else{
    console.log(`Não há alunos em destaque na turma`)
}
