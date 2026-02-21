let nomeDoJogado = "Mr.Braule"
let xp = 9000
let categoriaDeNivel = ""

if (xp <= 1000){
    categoriaDeNivel = "Ferro"
}
else if (xp >= 1001 && xp <= 2000){
    categoriaDeNivel = "Bronze"
}
else if (xp >= 2001 && xp <= 5000){
    categoriaDeNivel = "Prata"
}
else if (xp >= 5001 && xp <= 7000){
    categoriaDeNivel = "Ouro"
}
else if (xp >= 7001 && xp <= 8000){
    categoriaDeNivel = "Platina"   
}
else if (xp >= 8001 && xp <= 9000){
    categoriaDeNivel = "Ascendente"
}
else if (xp >= 9001 && xp <= 10000){
    categoriaDeNivel = "Imortal"
}
else if (xp >= 10001 ){
    categoriaDeNivel = "Radiante"
}

console.log(`O Heroi ${nomeDoJogado} esta no Nivel ${categoriaDeNivel}`)