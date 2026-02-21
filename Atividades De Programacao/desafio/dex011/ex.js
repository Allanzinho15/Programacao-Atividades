
let res = document.querySelector(`#resposta`)

function numerosPedidos(Quantidade){
let Armazem = []
let soma = 0


for (let I = 0 ; I < Quantidade; I++){
   
    let input
    let num  


    do{
        input = prompt(`digite o ${I+1} o numero`)
        num = Number(input)

    }while(isNaN(num))

   Armazem.push(num)
    soma += num

}
 return{
    numeros: Armazem,
    soma: soma
 }

}
let numero01 = numerosPedidos(5)
console.log(`numeros ${numero01.numeros}`)
console.log(`soma ${numero01.soma}`)

if (res){
    res.textContent = `Numeros digitado ${numero01.numeros.join(`,`)}`
    res.textContent += `soma total ${numero01.soma}`

}


