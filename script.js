const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const numbersValue = event.target.querySelector("#numbers");
  const sequenciasValue = event.target.querySelector("#sequencias");
  const resultElement = document.querySelector(".result");

  resultElement.innerHTML = "";
  const numbers = numbersValue.value;
  const sequencias = sequenciasValue.value;

  if (!numbers || numbers < 6 || numbers > 20) {
    resultElement.innerHTML = "Numero  Invalido!";
    return;
  }
  if (!sequencias || sequencias < 1) {
    resultElement.innerHTML = "Sequencia  Invalida!";
    return;
  }

  const table = document.createElement("table");
  const tblbody = document.createElement("tbody");
  const title = document.createElement("th");
  title.innerHTML = "Seus Numeros";
  tblbody.appendChild(title);

  for (let index = 0; index < sequencias; index++) {
    const value = contarRepeticoes(numbers);
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = `${index + 1}: ${value}`;
    tr.appendChild(td);
    tblbody.appendChild(tr);
  }
  table.appendChild(tblbody);
  resultElement.appendChild(table);
});

function contarRepeticoes() {
  const numerosAleatorios = [];

  while (numerosAleatorios.length < 6) {
    const numeroAleatorio = Math.floor(Math.random() * 60) + 1;

    if (!numerosAleatorios.includes(numeroAleatorio)) {
      numerosAleatorios.push(numeroAleatorio);
    }
  }
  const numerosOrdenados = numerosAleatorios.sort((a, b) => a - b);
  return numerosOrdenados;
}
