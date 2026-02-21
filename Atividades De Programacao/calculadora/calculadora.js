let input = document.querySelector(`#caixa1`)

let PrimeiroNum = ``
let Operação = ``
let SegundoNum = ``

function clicarNumero(num){
    if (Operação === ``){
        PrimeiroNum += num
        input.value = PrimeiroNum
    }else{ 
        SegundoNum += num
        input.value = SegundoNum
    }
}

function operador(op){
    Operação = op


}


function limpar(){
     PrimeiroNum = ``
     Operação = ``
     SegundoNum = ``
     input.value = ``


}

function calcular(){
    let resposta 
    let num1 = Number(PrimeiroNum)
    let num2 = Number(SegundoNum)

    switch (Operação){
        case `+`:
            resposta = num1 + num2
            break
        case `-`:
            resposta = num1 - num2
            break
        case `*`:
            resposta = num1 * num2
            break
        case `/`:
            resposta = num1 / num2
            break
        default:
        resposta = `erro`        

    }

    input.value = resposta
    PrimeiroNum = resposta.toString()
    Operação = ''
    SegundoNum = ''


}



