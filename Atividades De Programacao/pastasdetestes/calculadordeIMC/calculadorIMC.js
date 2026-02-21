function calculadorIMC(){
    let PesoIMC = Number(window.document.querySelector(`#pesoimc`).value)
    let AlturaIMC = Number(window.document.querySelector(`#alturaimc`).value)
    let res = window.document.querySelector(`#resposta`)

    if (PesoIMC <= 0 || AlturaIMC <= 0 || isNaN(AlturaIMC) || isNaN(PesoIMC) ){
        alert(`preencha os dados e tente novamente`)
        return

        }
    if(/[. ,]/.test(AlturaIMC)){
            alert(`erro, sua altura não precisa de . e nem de ,`)
        return
    }
        let alturaIMC = AlturaIMC / 100
        let CalculoIMC = PesoIMC / (alturaIMC * alturaIMC)
        let sexo = window.document.getElementsByName(`sex1`)
        let genero = ``
        let PESOIMC = ``

        if(sexo[0].checked){
            genero =`MASCULINO`

            if(CalculoIMC <= 18.5){
                PESOIMC = `Abaixo do peso`
            
            } else if(CalculoIMC <= 24.9){
                PESOIMC = `PESO NORMAL`

            }else if(CalculoIMC <= 29.9){
                PESOIMC = `OBESIDADE`

            }else if(CalculoIMC <= 34.9){
                PESOIMC = `OBESIDADE GRAU I`

            }else if(CalculoIMC <= 39.9){
                PESOIMC = `OBESIDADE GRAU II`

            }else{
                PESOIMC = `OBESIDADE GRAU III`
            }
            


        }
        else if(sexo[1].checked){
            genero = `FEMENINO`

            if(CalculoIMC <= 18.5){
                PESOIMC = `Abaixo do peso`
            
            } else if(CalculoIMC <= 24.9){
                PESOIMC = `PESO NORMAL`

            }else if(CalculoIMC <= 29.9){
                PESOIMC = `OBESIDADE`

            }else if(CalculoIMC <= 34.9){
                PESOIMC = `OBESIDADE GRAU I`

            }else if(CalculoIMC <= 39.9){
                PESOIMC = `OBESIDADE GRAU II`

            }else{
                PESOIMC = `OBESIDADE GRAU III`
            }

        }

        res.innerHTML = `Seu seu genero é ${genero} e o seu IMC é ${CalculoIMC.toFixed(2)}, seu peso esta ${PESOIMC}` 


    }

