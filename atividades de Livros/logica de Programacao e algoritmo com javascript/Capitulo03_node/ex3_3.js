const prompt = require("prompt-sync")();
//---------------------------------------------------------------------------
//lê os dados de entrada
const salario = Number(prompt("Salario: R$ "));
const tempo = Number(prompt("Tempo (Anos): "));
//---------------------------------------------------------------------------
//calcula o tempo e a porcentagem de acrecimo
const quadrienios = Math.floor(tempo / 4);
const crecimento = (salario * quadrienios) / 100;
//---------------------------------------------------------------------------
//exibe as resposta
console.log(`Quadrienios: ${quadrienios}`);
console.log(`Salario Final R$: ${(salario + crecimento).toFixed(2)}`)