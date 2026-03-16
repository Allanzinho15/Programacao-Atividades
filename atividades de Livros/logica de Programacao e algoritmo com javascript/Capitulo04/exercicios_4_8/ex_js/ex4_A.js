const frm = document.querySelector("form");
const resp = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = Number(frm.inNumero.value);
    const parOuImpa = numero % 2 == 0 ? resp.innerText = `${numero} é Par `  :  resp.innerText = `${numero} é Impar`;
});

