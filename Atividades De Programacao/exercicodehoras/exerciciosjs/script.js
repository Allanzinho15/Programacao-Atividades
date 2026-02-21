function tabuada(){
    let nuneroDaTabuada = window.document.querySelector(`#tabu`).value
    let caixaDaTabuada = window.document.querySelector(`#seltabu`)
    if(nuneroDaTabuada.length == 0){
        alert(`por favor digite um numero`)
    }else{
        let numeroDaTbu = Number(nuneroDaTabuada)
        caixaDaTabuada.innerHTML = ``

    for(let c = 1; c <= 10; c*numeroDaTbu, c++ ){
        let item = window.document.createElement(`option`)
        item.text = `${numeroDaTbu} X ${c} = ${numeroDaTbu*c}`
        caixaDaTabuada.appendChild(item)

    }
    }
    



}