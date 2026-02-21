let agora = new Date()
let horas = agora.getHours()
let mintos = agora.getMinutes()
let seguntos = agora.getSeconds()
let milesimo = agora.getMilliseconds()
//let horas = 
console.log(`agora são exatamente ${horas} horas ${mintos} minutos ${seguntos} segundos e ${milesimo} milesimos de segundos`)
if (horas >=5  && horas <=12) {
  console.log(`bom diaa `)
} else if (horas >= 13 && horas <=18) {
  console.log(`boa tardee`)
} else if (horas >= 19) {
  console.log(`boa noite`)
}else if( horas >= 0 && horas <=4 ){
    console.log(`boa madrugada`)
}
