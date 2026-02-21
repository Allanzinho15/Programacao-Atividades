function Somar(num1, num2){
    let S = Number(num1) + Number(num2)

     return S
   

}
function subtração(num1, num2){
    let sb = Number(num1) - Number(num2)

     return sb
   

}
function Multiplicação(num1, num2){
    let Mul = Number(num1) * Number(num2)

     return Mul
   


}
function Divisão(num1, num2){
    let Div = Number(num1) / Number(num2)

    return Div
    


}
function calculadora(num1, num2, operão){

    switch(operão){
        case `+`:
         return Somar(num1, num2)
         break
        case `-`:
         return subtração(num1, num2)
         break
        case `*`:
         return Multiplicação(num1, num2)
         break
        case `/`:
         return Divisão(num1, num2)
         break
    }


    
}

 let resultado = calculadora(8, 6, `-`).toFixed(1, `0`).toString().replace(`.`, `,`)

 console.log(resultado)
