const calcularMedia = (...notas) => {
  const num = notas.length; //nptas é um array
  if (num == 0) {
    console.log(`Informe, no minimo, uma nota`);
    return
  }
  let soma = 0
  for (const nota of notas) {
    soma += nota //soma o valor dos argumentos
  }
  const media = soma / num  //calcula a media
  console.log(`Média: ${media.toFixed(1)}`)
};
//exemplo de chamada de calcularMedia() com n° de parâmetros diferentes
calcularMedia(6, 7, 8)
calcularMedia(2, 10)
calcularMedia(7.5, 10, 8, 9.5)
calcularMedia()