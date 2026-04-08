const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const nome = frm.inFuncionaro.value.trim()

    if (!nome.includes(" ")) {
        alert(`Informe o nome completo...`)
        return
    }

    const priEspaco = nome.indexOf(" ");
    const ultEspaco = nome.lastIndexOf(" ");

    const chacha = `${nome.substr(0, priEspaco)} ${nome.substr(ultEspaco)}`

    resp.innerText = `Crachá: ${chacha}`
});