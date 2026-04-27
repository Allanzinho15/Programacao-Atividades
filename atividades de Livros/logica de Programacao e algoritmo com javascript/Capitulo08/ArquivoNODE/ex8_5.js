const PromptSync = require("prompt-sync")

const prompt = require("prompt-sync")()

const vinho = []

const titulo = (texto) =>{
    console.log()
    console.log(texto)
    console.log("=".repeat(40))
}
const incluir = () =>{
    titulo("===< Inclusão de Vinho >===")
    const marca = prompt("Marca...: ")
    const tipo = prompt("Tipo...: ")
    const preco = Number(prompt("Preço R$: "))
    vinho.push({marca, tipo, preco})
    console.log("ok! Vinho cadastado com sucesso")
}
const listar = () =>{
    titulo("===< Listar de Vinhos Cadastrados >===")
    console.log("Marca............... Tipo............... Preço R$:")
    for (const vinhos of vinho) {
        console.log(`${vinhos.marca.padEnd(20)} ${vinhos.tipo.padEnd(20)} ${vinhos.preco.toFixed(2).padStart(9)}`)
    }
}
const pesquisar = () =>{
    titulo("===< Pesquisa por Tipo de Vinho >===")
    const pesq = Prompt("Tipo: ")
    let contador = 0
    console.log("Marca............... Tipo............... Preço R$:")
    for (const vinhos of vinho) {
        if (vinhos.tipo.toUpperCase().includes(pesq.toUpperCase())) {
            console.log(`${vinhos.marca.padEnd(20)} ${vinhos.tipo.padEnd}` + `${vinhos.preco.toFixed(2).padStart(9)}`)
            contador++
        }
    }
    if (contador == 0) {
        console.log(`Obs: Não há vinhos cadastrados do tipo ${tipo}`)
    }
}
const calcularMedia = () =>{
    titulo("===< Média e Destaque do Cadastro de Vinho >===")

    const num = vinho.length
    if (num == 0) {
        console.log(`Obs: Não há vinho cadastros`)
        return
    }

    let total = 0
    for (const vinhos of vinho) {
        total += vinho.preco
    }

    const media = total / num
    const vinhos2 = [...vinho]
    vinhos2.sort((a, b) => a.preco - b.preco)  
    const menor = vinhos2[0]
    const maior = vinhos2[num - 1]

    console.log(`Preço Médio dos Vinhos R$: ${media.toFixed(2)}`)
    console.log(`Menor Valor R$: ${menor.preco.toFixed(2)} - ${menor.marca}`)
    console.log(`Maior Valor R$: ${maior.preco.toFixed(2)} - ${maior.marca}`)
}

let ligado = true
do {
    titulo("===< Cadastro de Vinhos >===")
    console.log("1. Inclusão de Vinhos")
    console.log("2. Listagem de Vinhos")
    console.log("3. Pesquisa por Tipo")
    console.log("4. Média e Destaques")
    console.log("5. Finalizar")
    
    const opcao = Number(prompt("Opção: "))
    switch (opcao) {
        case 1:
            incluir()
            break;
        case 2:
            listar()
            break
        case 3:
            pesquisar()
            break
        case 4:
            calcularMedia()
            break
        case 5:
            ligado = false
            break
        default:
            break;
    }
} while (ligado);