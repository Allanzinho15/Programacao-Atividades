const prompt = require("prompt-sync")(); //adiciona o pacote prompt-sync

const pessoa = Number(prompt("N pessoas "));//lê dados de entrada 
const peixe = Number(prompt("N peixes "));

let pagar //declara a variavel pagar 

if (peixe <= pessoa) { // condição definida no exemplo 

    pagar = pessoa * 20
}
else {

    pagar = (pessoa * 20) + ((peixe - pessoa) * 12)
}
console.log(`Pagar R$: ${pagar.toFixed(2)} `)