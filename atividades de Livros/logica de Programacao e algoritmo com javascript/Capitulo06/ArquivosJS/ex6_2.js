const frm = document.querySelector(`form`);//Obtém elementos do documento DOM
const respErros = document.querySelector(`#outErros`);
const respChances = document.querySelector(`#outChances`);
const respDica = document.querySelector(`#outDica`);

const erros = []; //vetor de escopo global com número maximo ja apostado
const sorteado = Math.floor(Math.random() * 100) + 1 //numero aleatorio entre 1 e 100
const chances = 6 //constante com número maximo de chances

frm.addEventListener(`submit`, (e) => { // escuta evento submit do form
    e.preventDefault();//evita o envio do form

    const numero = Number(frm.inNumero.value);

    if (numero == sorteado) {//se acertou
        respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`
        frm.btSubmit.disabled = true //troca o status dos botões
        frm.btNovo.className = "exibe"

    }else{
        if (erros.includes(numero)){// se números existe no vetor erros (já apsotou)
            alert(`Você ja apostou o número ${numero}. Tente outro...`);
        }else {
            erros.push(numero);//adiciona número ao vetor
            const numErros = erros.length //obtém tamanho do vetor
            const numChances = chances - numErros //calcula n de chances

            //exibe n de erros, conteúdo do vetor e n de chances
            respErros.innerText = `${numErros} (${erros.join(",")})`
            respChances.innerText = numChances

            if (numChances == 0) {
                alert(`Suas chances acabaram...`);
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"

                respDica.innerText = `Game Over!! Número Sorteado: ${sorteado}`
            }else{
                //usa operador ternário para mensagem da dica
                const dica = numero < sorteado ? "Maior" : "Menor"
                respDica.innerText = `Dica: Tente um Número ${dica} que ${numero}`
            }
        }
    }
    frm.btNovo.addEventListener(`click`, () => {
        location.reload() //recarrega a página
    });


frm.inNumero.value = "" //limpa campo de entrada
frm.inNumero.focus() //posiciona curso neste campo
})