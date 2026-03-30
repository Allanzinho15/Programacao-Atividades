const prompt = require(`prompt-sync`)();

console.log(`Informe os cliente em ordem de Chegada ou 'Fim' no nome para sair`);
const cliente = [];

do {
    const nome = prompt(`Nome: `);
    if (nome == "Fim"){
        break
    }
    const idade = Number(prompt("Idade: "));
    cliente.push({nome, idade});
    console.log(`Ok! Cliente inserido na fila...`);
} while (true);
console.log(`\nFila Preferencial`)
console.log("-".repeat(40));

const filaPref = cliente.filter(prefFila => {
    return prefFila >= 60
})
filaPref.forEach((fila, i) => {
    console.log(`${i+1}. ${fila.nome}`);
})

console.log(`\nFila Normal`);
console.log("-".repeat(40));
const filaNormal = cliente.filter(prefNormal => {
    return prefNormal < 60
})
filaNormal.forEach((fila, i) => {
    console.log(`${i+1}. ${fila.nome}`)
})