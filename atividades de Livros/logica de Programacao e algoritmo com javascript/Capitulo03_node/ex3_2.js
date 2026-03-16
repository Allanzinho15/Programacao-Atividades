const prompt = require("prompt-sync")()//adiciona o pacote ao programa
//---------------------------------------------------------------------------
const veiculo = prompt("veiculo: ");//lê os dados de entrada
const preco = Number(prompt("Preço R$: "));
//---------------------------------------------------------------------------
//calcula o valor da entrada e das parcelas
const entrada = preco * 0.50
const parcela = (preco * 0.50) / 12
//---------------------------------------------------------------------------
//exibe as resposta 
console.log(`Proção: ${veiculo}`);
console.log(`Entrada de R$: ${entrada.toFixed(2)}`);
console.log(`+12x de R$ ${parcela.toFixed(2)}`);


