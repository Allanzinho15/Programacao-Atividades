const prompt = require("prompt-sync")() //adiciona pacote prompt-sync
const numero = Number(prompt(`Número (centena)`)); //lê número

if (numero < 100 || numero >= 1000){
    console.log(`Erro..... deve ser uma centena`);
    return
}
const num1 = Math.floor(numero / 100);
const sobra = numero % 100;
const num2 = Math.floor(sobra / 10);
const num3 = sobra % 10;

console.log(`invertido: ${num3} ${num2} ${num1}`)//exibe o número invertido 