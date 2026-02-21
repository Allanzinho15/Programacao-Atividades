let amigo = {nome:`allan`, sexo:`Masculino`, peso: 100, engordar(kg = 0){
    console.log(`Engordou`)
    this.peso += kg
}

}
 amigo.engordar(5)
 console.log(`${amigo.nome} pesa ${amigo.peso}kg`)