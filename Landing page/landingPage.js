const link = document.querySelector(`.butao-edit`);

const enviarWhatsapp = () =>{
    const telefone = 7193655461
    const mensagem = "Óla! Tenho interesse no plono completo."
    const mensagemFormatada = encodeURIComponent(mensagem)
    const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`
    window.open(url, `_blank`)
}

link.addEventListener(`click`, () =>{
    enviarWhatsapp()
})