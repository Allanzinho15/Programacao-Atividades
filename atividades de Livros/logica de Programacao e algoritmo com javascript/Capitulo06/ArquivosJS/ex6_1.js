const frm = document.querySelector(`form`);//Obtém elementos da paginas
const respNome = document.querySelector(`span`);
const respLista = document.querySelector(`pre`);

const pacientes = []; //Declara vetor global

frm.addEventListener(`submit`, (e) =>{
    e.preventDefault() // evita envio do form 

    const nome = frm.inPaciente.value; //Obtém nome do paciente
    pacientes.push(nome) // adiciona o nome no final do vetor
    let lista = " "//string para concatenar paciente

    for(let i = 0; i < pacientes.length; i++){//for tradicional (inicia com 0. enquanto menor que tamanho do array) 
        lista += `${i+1}. ${pacientes[i]} \n`
    }
    respLista.innerText = lista //exibe a lista de paciente na página
    frm.inPaciente.value = " " //limpa conteúdo do campon de formulario
    frm.inPaciente.focus() //posiciona o curso no campo

});

//adiciona um ouvinte para o evento click no btUrgencia que está no from
frm.btUrgencia.addEventListener(`click`, () => {
    //verifica  se as validações do form estão ok (no caso, is required)
    if (!frm.checkValidity()) {
        alert(`Informe o nome do paciente a ser atendido em caráter de urgência`);
        frm.inPaciente.focus() //Posiciona o curso no campo inPaciente
        return//retorna ao form
    }

    const nome = frm.inPaciente.value; //obtém nome do Paciente
    pacientes.unshift(nome); // adiciona paciente no inicio do vetor
    let lista = " "//string para concatenar paciente

    pacientes.forEach((paciente, i) => {//forEach aplica sobre o array paciente
        lista += `${i+1}. ${paciente}\n`
    });
    respLista.innerText = lista //exibe a lsita de paciente na página
    frm.inPaciente.value = " " //Limpa conteúdo do campo de formulario
    frm.inPaciente.focus() //posiciona o cursor no campo 
});


frm.btAtender.addEventListener(`click`, () =>{
    if (pacientes.length == 0) {//se o tamanho do vetor = 0 
        alert(`Não há pacientes na lista de espera`)
        frm.inPaciente.focus();
        return
    }
    const atender = pacientes.shift(); //remove do inicio da fila (e obtém nome)
    respNome.innerText = atender;//exibe o nome do paciente em atendimento
    let lista = " "//string para concatenar pacientes
    pacientes.forEach((paciente, i ) =>{
        lista += `${i+1}. ${paciente}\n`
    })
    respLista.innerText = lista //exibi a lista de pacientes na página
})
