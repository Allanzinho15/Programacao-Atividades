const prompt = require("prompt-sync")();
//---------------------------------------------------------------------------
//lê os dados 
const pesoKg = Number(prompt(`Peso da Ração(Kg): `));
const consumo = Number(prompt(`Consumo Diario(gr): `));
//---------------------------------------------------------------------------
//calculo 
const PesoGr = pesoKg * 1000 //variavel auxiliar 
const duracao = Math.floor(PesoGr / consumo)
const sobra = PesoGr % consumo;
//---------------------------------------------------------------------------
//saida de dados
console.log(`Duração: ${duracao} Dias`);
console.log(`Sobra: ${sobra}gr`);