const prompt = require("prompt-sync")();
const valor = Number(prompt(`Valor da Compra R$: `));
const aux = Math.floor(valor/ 20);
const parcela = aux == 0 ? 1 : aux > 6 ? 6 : aux;
const valorParcela = valor / parcela;
console.log(`Pode Pagar em ${parcela}x de R$: ${valorParcela.toFixed(2)}`);