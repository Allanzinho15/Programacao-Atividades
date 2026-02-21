let peso = 66
console.log(`seu peso atual é de ${peso}kg`)
if(peso <= 66){
    console.log(`você esta com disnutrição`)    
}else if(peso <= 75){
    console.log(`voçê esta com peso ideal `)
}else if(peso <= 85){
    console.log(`voçê esta com sobrepeso`)
}else if(peso <= 100){
    console.log(` você esta com obesidade`)
}else {
    console.log( `você esta com (obesidade grau II)`)
}