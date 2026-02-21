function carregar() {
  let mensagem = window.document.querySelector(".msghoras");
  let fotos = window.document.querySelector(".mudarimg");
  let mensagemdebomdia = window.document.querySelector(".msg_bomdia");
  let data = new Date();
  let horasdia = String(data.getHours()).padStart(2, `0`);
  let minutosdia = String(data.getMinutes()).padStart(2, `0`);
  //   let horasdia = `20`  // para teste o horas

  mensagem.innerHTML = `Agora são ${horasdia}H : ${minutosdia}M `;

  if (horasdia >= 0 && horasdia <= 12) {
    fotos.src = `fotomanha.jpg`;
    document.body.style.background = `#e2cd9f`;
    mensagemdebomdia.innerHTML = `bom dia`;
  } else if (horasdia >= 13 && horasdia <= 18) {
    fotos.src = `fototarde.jpg`;
    document.body.style.background = `#b9846f`;
    mensagemdebomdia.innerHTML = `boa tarde`;
  } else {
    fotos.src = `fotonoite.jpg`;
    document.body.style.background = `black`;
    mensagemdebomdia.innerHTML = `boa noite`;
  }
}
