const form = document.querySelector("#form");
const numeros = [
  1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 1, 2, 3, 4, 5, 6, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 11, 12,
];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const numbersValue = event.target.querySelector("#numbers");
  const sequenciasValue = event.target.querySelector("#sequencias");
  const resultElement = document.querySelector(".result");

  resultElement.innerHTML = "";
  const numbers = numbersValue.value;
  const sequencias = sequenciasValue.value;

  if (!numbers || numbers < 6) {
    return;
  }
  if (!sequencias || sequencias < 1) {
    return;
  }

  const table = document.createElement("table");
  const tblbody = document.createElement("tbody");
  const title = document.createElement("th");
  title.innerHTML = "Seus Numeros";

  tblbody.appendChild(title);

  const result = [];

  for (let index = 0; index < sequencias; index++) {
    const value = contarRepeticoes(numeros, numbers);
    result.push(value);
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = `${index + 1}: ${value}`;
    tr.appendChild(td);
    tblbody.appendChild(tr);

    console.log(
      "🚀 ~ file: script.js:26 ~ contarRepeticoes(numeros, numbers):",
      contarRepeticoes(numeros, numbers)
    );
  }
  table.appendChild(tblbody);
  table.classList.add("table-numbers");
  resultElement.appendChild(table);

  console.log("🚀 ~ file: script.js:24 ~ result:", result);
});

function contarRepeticoes(numeros, numbers) {
  const contagemRepeticoes = new Map();

  // Contagem de repetições
  numeros.forEach((numero) => {
    contagemRepeticoes.set(numero, (contagemRepeticoes.get(numero) || 0) + 1);
  });

  // Ordenar os números por frequência (do maior para o menor)
  const listaOrdenada = Array.from(contagemRepeticoes.entries()).sort(
    (a, b) => a[1] - b[1]
  );

  // Obter os 12 números mais repetidos
  const numerosMaisRepetidos = listaOrdenada
    .slice(0, 12)
    .map((entry) => entry[0]);

  // Gerar 6 números aleatórios baseados nos 12 mais repetidos
  const numerosAleatorios = [];
  const numerosDisponiveis = [...numerosMaisRepetidos];

  for (let i = 0; i < Math.min(6, numerosMaisRepetidos.length); i++) {
    const indiceAleatorio = Math.floor(
      Math.random() * numerosDisponiveis.length
    );
    const numeroEscolhido = numerosDisponiveis.splice(indiceAleatorio, 1)[0];
    numerosAleatorios.push(numeroEscolhido);
  }
  return numerosAleatorios;
}
