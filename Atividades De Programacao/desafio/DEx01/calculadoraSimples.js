let respon = document.querySelector(`#resultado`)
let num01 = window.prompt(`digite um numero`)
let num02 = window.prompt(`digite o segundo numero`)

let soma = Number(num01) + Number(num02)


respon.innerHTML = `a somo dos numeros digitados é ${soma}`