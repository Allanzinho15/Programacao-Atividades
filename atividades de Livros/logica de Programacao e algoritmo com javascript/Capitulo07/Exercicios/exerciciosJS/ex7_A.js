const frm = document.querySelector(`form`);
const resp = document.querySelector(`h3`);

frm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const palavra = frm.inMensagem.value.trim();
  let palavras = "";

  for (let i = 0; i < palavra.length - 1; i++) {
    if (i % 2 == 0) {
      palavras += palavra.charAt(i + 1);
    }
  }

  for (let i = 0; i < palavra.length; i++) {
    if (i % 2 == 0) {
      palavras += palavra.charAt(i);
    }
  }

  resp.innerText = `${palavras}`;
});

frm.btDescriptografa.addEventListener(`click`, () => {
  if (!frm.checkValidity()) {
    alert("Informe a mensagem criptografada");
    frm.inMensagem.focus();
    return;
  }
  const palavra = frm.inMensagem.value.trim();

  resp.innerText = palavra;
});
