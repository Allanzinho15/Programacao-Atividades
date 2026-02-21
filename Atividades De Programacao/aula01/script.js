function verificar(){
   let data = new Date()
   let anodenascimento = data.getFullYear()
   let caixa_do_ano = window.document.querySelector(`#ano_de_nascimento`)
   let resposta = window.document.querySelector(`.respostadamaquina`)
   //conserta caso der errado daqui pra baixo
   let sexo = window.document.getElementsByName(`sex1`)
   let idade = anodenascimento - Number(caixa_do_ano.value)
   let genero = ``
   let imagem = window.document.createAttribute(`img`)
   imagem.setAttibute(`id`, `foto`)
  

   if(caixa_do_ano.value.length == 0 || Number(caixa_do_ano.value) >= anodenascimento ){
     window.alert(`[ERRO] verifique os dados e tente novamento!`)
     return;
   }
    if(sexo[0].checked){
    genero = `masculino`

     if(idade >=0 && idade <=10){
      imagem.setAttirbute(`src`, ``)

     }else if(idade < 22){
      imagem.setAttirbute(`src`, ``)

     }else if(idade < 50 ){
      imagem.setAttirbute(`src`, ``)

     }

         

   } else if(sexo[1].checked){ 
    genero = `feminino`

    if(idade >=0 && idade <=10){
      imagem.setAttirbute(`src`, ``)

     }else if(idade < 22){
      imagem.setAttirbute(`src`, ``)

     }else if(idade < 50 ){
      imagem.setAttirbute(`src`, ``)

     }



   }
    

   
   resposta.style.textAlign = `center`
   resposta.innerHTML = `detectamos ${genero} com ${idade}`
   resposta.appendChild(imagem)

   
}