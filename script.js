const form = document.querySelector("#form");
const numeros = [
  1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 1, 2, 3, 4, 5, 6, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
  39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
  58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
  77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
  96, 97, 98, 99,
];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const numbersValue = event.target.querySelector("#numbers");
  const sequenciasValue = event.target.querySelector("#sequencias");
  const resultElement = document.querySelector(".result");

  resultElement.innerHTML = "";
  const numbers = numbersValue.value;
  const sequencias = sequenciasValue.value;

  if (!numbers || numbers < 6 || numbers > 20) {
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
    console.log("🚀 ~ file: script.js:36 ~ value:", value);
    result.push(value);
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = `${index + 1}: ${value}`;
    tr.appendChild(td);
    tblbody.appendChild(tr);
  }
  table.appendChild(tblbody);
  table.classList.add("table-numbers");
  resultElement.appendChild(table);
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
    .slice(0, numbers)
    .map((entry) => entry[0]);

  // Gerar 6 números aleatórios baseados nos 12 mais repetidos
  const numerosAleatorios = [];
  const numerosDisponiveis = [...numerosMaisRepetidos];
  console.log(
    "🚀 ~ file: script.js:71 ~ contarRepeticoes ~ numerosMaisRepetidos:",
    numerosMaisRepetidos
  );

  for (let i = 0; i < Math.min(numbers, numerosMaisRepetidos.length); i++) {
    const indiceAleatorio = Math.floor(
      Math.random() * numerosDisponiveis.length
    );
    const numeroEscolhido = numerosDisponiveis.splice(indiceAleatorio, 1)[0];
    numerosAleatorios.push(numeroEscolhido);
  }
  return numerosAleatorios;
}
