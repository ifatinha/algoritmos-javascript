/** Capitulo 05 - estruturas de repetição: Exemplo 10
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let qtdIdade18 = 0;
let somaIdades = 0.0;
let somaAlturas = 0.0;
let qtdPeso = 0;

for (let i = 1; i <= 5; i++) {
  console.log("Informações time " + i);

  for (let j = 1; j <= 11; j++) {
    console.log("Dados do º" + j + " jogador");
    let idade = scanner.questionInt("Idade: ");
    let peso = scanner.questionFloat("Peso: ");
    let altura = scanner.questionFloat("Altura: ");

    if (idade < 18) {
      qtdIdade18++;
    }

    if (peso > 80) {
      qtdPeso++;
    }

    somaIdades += idade;
    somaAlturas += altura;
  }

  let mediaIdade = somaIdades / 11;
  console.log("Média de Idades do º" + i + " time: " + mediaIdade.toFixed(2));
}

let mediaAltura = somaAlturas / 55;
let percPeso = (qtdPeso * 100) / 55;

console.log(
  "Quantidade de jogadores com menos de 18 anos".padEnd(50, ".") +
    ": " +
    qtdIdade18
);
console.log(
  "Média de altura de todos os jogadores do campeonato".padEnd(50, ".") +
    ": " +
    mediaAltura.toFixed(2)
);
console.log(
  "Percentual de Jogadores com mais de 80kg".padEnd(50, ".") +
    ": " +
    percPeso +
    "%"
);
