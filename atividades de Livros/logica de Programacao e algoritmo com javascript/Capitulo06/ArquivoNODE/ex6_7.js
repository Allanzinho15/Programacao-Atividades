const prompt = require(`prompt-sync`)();
console.log(`Informe o Valor Dos saques ou 0 para sair`);

const saque = [];

do {
    const valor = Number(prompt(`Saque R$: `))//
    if (valor == 0) {
        break
    }
    saque.push(valor)
    
    if (valor % 10 == 0) {
        console.log(`Saque Realizado com Sucesso`);

    }else{
        console.log(`Erro... Valor Inválido (deve ser múltiplo de 10)`);
    }    
} while (true);
console.log(`\nSaque Válidos`);
console.log("-".repeat(40));
const saqueValidos = saque.filter(saque =>{
    return saque % 10 == 0
})
saqueValidos.forEach(saqueVali => {
    console.log(`${saqueVali.toFixed(2)}`)
})

console.log("-".repeat(40));
const totalSaque = saqueValidos.reduce((total, saques) =>{
    return total + saques
}, 0);
console.log(`Total dos Saques: R$ ${totalSaque.toFixed(2)}`);

const saqueInvalidos = saque.length - saqueValidos.length
console.log(`\nN° de Tentativa  de Saques (Saques Invalidos): ${saqueInvalidos}`);