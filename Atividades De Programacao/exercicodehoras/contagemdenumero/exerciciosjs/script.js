function verificar(){
    let caixadoinicio = window.document.querySelector(`#iniciodonumero`).value
    let caixadofim = window.document.querySelector(`#fimdonumero`).value
    let caixadopasso = window.document.querySelector(`#passodonumero`).value
    let res = window.document.querySelector(`#resp`)


    if(caixadoinicio.length == 0 || caixadofim.length == 0 || caixadopasso.length == 0 ){
        window.alert(`caixa esta vazia, ERRO tente novamnete`)
    } 
    else{
        
        let inicio = Number(caixadoinicio)
        let fim = Number(caixadofim)
        let passo = Number(caixadopasso)

        if(passo <= 0){
           window.alert(`erro na caixa de passo, nao posso fazer a contagem com 0`)
        passo = 1

        }
        if (inicio < fim){
             for(let c = inicio; c <= fim; c += passo ){
                res.innerHTML += `${c} `

             }
        }else{
            for(let c = inicio; c >= fim; c -= passo){
                res.innerHTML += `${c} `

            }
        }
           
    }

 }