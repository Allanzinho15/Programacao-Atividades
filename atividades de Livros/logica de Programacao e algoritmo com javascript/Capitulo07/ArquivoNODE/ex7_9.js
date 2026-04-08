const prompt = require("prompt-sync")();
const formulario = prompt("Fórmulario: ");

let abre = 0;
let fecha = 0;

for (const simbolo of formulario){
    if(simbolo == "("){
        abre++
    }else if(simbolo == ")"){
        fecha++
    }

    if (fecha > abre) {
        break
    }   
}

if (abre == fecha) {
        console.log("ok! Fórmula correta (em relação aos parênteses)")
    }else{
        console.log("Erro... fórmula incorreta")
    }