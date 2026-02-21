function lampada01(){
    let divDalampada = document.querySelector(`#lampada`)
    let interropiTor = document.querySelector(`#interropitor`)
    const estaAcesa = divDalampada.classList.contains('acesa');

    if(estaAcesa){
      divDalampada.classList.remove(`acesa`)
        interropiTor.textContent = `apagar`

    }else{
         divDalampada.classList.add(`acesa`)
        interropiTor.textContent = `acender`
    }
}