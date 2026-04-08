const anoAtual = new Date().getFullYear();
const idade = prompt(`Quantos anos você comemoria em ${anoAtual}`);
const anoNascimento = anoAtual - idade;

alert(`Ah... Então você nasceu em ${anoNascimento}`);
