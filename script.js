const title = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const input3 = document.querySelector('#calculo3');
const input4 = document.querySelector('#calculo4');
const btnCalcular = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');
const resultAddEvent = document.querySelector('#resultAddEvent')

function btnOnClick() {
  const resultadoImput = parseInt(input1.value) + parseInt(input2.value);
  result.innerHTML = `El resultado es: ${resultadoImput}`;
}

btnCalcularAddEvent.addEventListener('click', btnOnClickAddEvent);
function btnOnClickAddEvent() {
  const resultadoImput = +input3.value + +input4.value;
  resultAddEvent.innerHTML = `El resultado es: ${resultadoImput}`;
}