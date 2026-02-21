function verificar() {
  let data = new Date();
  let anodenascimento = Number(data.getFullYear());
  let caixa_do_ano = Number(document.querySelector('#ano_de_nascimento').value)
  let resposta = document.querySelector('.respostadamaquina');
  
  if (caixa_do_ano < 0 || caixa_do_ano >= anodenascimento) {
    alert('[ERRO] verifique os dados e tente novamente!');
  } else {
    let sexo = document.getElementsByName('sex1');
    let idade = anodenascimento - caixa_do_ano;
    let genero = '';
    let imagem = document.createElement('img');
    imagem.setAttribute('id', 'foto');

    if (sexo[0].checked) {
      genero = 'masculino';
      
      if (idade >= 0 && idade <= 10) {
        imagem.setAttribute('src', '');
      } else if (idade < 22) {
        imagem.setAttribute('src', '');
      } else {
        imagem.setAttribute('src', '');
      }
      
    } else if (sexo[1].checked) { 
      genero = 'feminino';

      if (idade >= 0 && idade <= 10) {
        imagem.setAttribute('src', '');
      } else if (idade < 22) {
        imagem.setAttribute('src', '');
      } else {
        imagem.setAttribute('src', '');
      }
    } 

    resposta.style.textAlign = 'center';
    resposta.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    resposta.appendChild(imagem);
  }
}