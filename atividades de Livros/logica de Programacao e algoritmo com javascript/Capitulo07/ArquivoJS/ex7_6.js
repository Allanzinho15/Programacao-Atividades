const frm = document.querySelector(`form`);
const resp = document.querySelector(`h3`);

frm.addEventListener(`submit`, (e) => {
  e.preventDefault();

  const senha = frm.inSenha.value;
  const erros = [];

  if (senha.length < 8 || senha.length > 15) {
    erros.push("Possuir Entre 8 e 15 Caracteres");
  }

  if (senha.match(/[0-9]/g) == null) {
    erros.push("Possuir Número (no minimo, 1)");
  }

  if (!senha.match(/[a-z]/g)) {
    erros.length("Possuir letras minusculas (no minimo, 1)");
  }

  if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/).length == 1) {
    erros.push("Possuir letras maiúscula (no minimo, 2)");
  }

  if (!senha.match(/[\W|_]/g)) {
    erros.push("Possuir simbolos (no monimo, 1)");
  }

  if (erros.length == 0) {
    resp.innerText = `ok! Senha Valida`;
  } else {
    resp.innerText = `Erro.... A senha deve ${erros.join(", ")}`;
  }
});
