const frm = document.querySelector(`form`);//Obtém elemntos da página
const resp1 = document.querySelector(`#outResp1`);
const resp2 = document.querySelector(`#outResp2`);
const resp3 = document.querySelector(`#outResp3`);

frm.addEventListener(`submit`, (e) => {
    e.preventDefault(); //evita envio do form 

    const modelo = frm.inModelo.value;// obtém o conteúdo dos DOM
    const ano = frm.inAno.value;
    const preco = frm.inPreco.value;

    const classificacao = classificarVeiculo(ano)// chama a funções e atribui
    const entrada = calcularEntrada(preco, classificacao)//... retorna ás variaveis
    const parcela = (preco - entrada) / 10 //usa retorno da função para cálculo

    resp1.innerText = modelo + " - " + classificacao //exibe as resposta
    resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+10x de R$: ${parcela.toFixed(2)}`
});
//função recebe o ano do veiculo como parâmetro
const classificarVeiculo = (ano) =>{
    const anoAtual = new Date().getFullYear() //Obtém o ano atual
    let classifi
    if (ano === anoAtual) {
        classifi = "Novo"
    }else if (ano === anoAtual -1 || ano === anoAtual -2) {
        classifi = "Seminovo"
    }else{
        classifi = "Usado"
    }

    return classifi //retorna a classificação
}

const calcularEntrada = ( valor, status) => status == "Novo" ? valor * 0.5 : valor * 0.3