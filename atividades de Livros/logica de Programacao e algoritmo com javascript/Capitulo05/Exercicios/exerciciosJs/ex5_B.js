const frm = document.querySelector(`form`);
const resp = document.querySelector(`h3`);

frm.addEventListener(`submit`, (e) => {
  e.preventDefault();

  const QuanChinchila = Number(frm.inChinchilas.value);
  const anos = Number(frm.inAnos.value);
  let acumulador = QuanChinchila;

  let exibir = " ";
  for (let i = 1; i <= anos; i++) {
    exibir = `${exibir} ${i}° Anos: ${acumulador} Chinchilas \n`;
    acumulador *= 3;
  }
  resp.innerText = exibir;
});
