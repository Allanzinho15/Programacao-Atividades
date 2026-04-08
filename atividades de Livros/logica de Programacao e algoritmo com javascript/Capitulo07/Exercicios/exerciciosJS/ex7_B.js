const frm = document.querySelector(`form`);
const resp = document.querySelector(`h3`);

frm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const frase = frm.inFrase.valu.etoUpperCase();
  const fraseSemEspaco = frase.replace(/ /g,"")
  let palavra = "";
  let cout = 0;
  for (let i = fraseSemEspaco.length - 1; i >= 0; i--) {
    if (fraseSemEspaco.charAt(cout) == fraseSemEspaco.charAt(i)) {
      palavra += fraseSemEspaco.charAt(i);
    }else{
      break
    }
    
    cout++;
  }
  if (palavra == fraseSemEspaco) {
    resp.innerText = `${frase} é um palíndromo.`;
  }else{
    resp.innerText = `${frase} não é um palíndromo.`;
  }
});
