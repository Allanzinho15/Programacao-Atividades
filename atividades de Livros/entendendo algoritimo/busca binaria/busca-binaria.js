function buscaBinaria(vetor, item){

    let inicioDoIndice = 0
    let finalDoIndice = vetor.length -1

    while(inicioDoIndice <= finalDoIndice){

        let meioDoIndice = Math.floor((inicioDoIndice + finalDoIndice) / 2)
        let chuteDoNumero = vetor[meioDoIndice]

         if(chuteDoNumero === item){
            
            return meioDoIndice  
        }
         else if(chuteDoNumero > item){

            finalDoIndice = meioDoIndice -1
        }
        else {

            inicioDoIndice = meioDoIndice +1
    
        } 
 
    }

    return -1
}

let vetor = [1, 3, 5, 7, 9,]


console.log(buscaBinaria(vetor, 9))
console.log(buscaBinaria(vetor, 3))
