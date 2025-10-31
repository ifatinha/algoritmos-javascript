/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 08
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let qtdIdade = 0;
let mediaIdade = 0.0;
let qtdIdade2 = 0;
let qtdCorAzul = 0;
let qtdRuivas = 0;

for (let i = 1; i <= 6; i++) {
  console.log("Dados da pessoa " + i);
  let idade = scanner.questionInt("Informe a idade da pessoa: ");
  let peso = scanner.questionFloat("Informe o peso da pessoa: ");
  let altura = scanner.questionFloat("Informe a altura da pessoa: ");

  let corOlhos = scanner.question(
    "Informe a cor dos olhos da pessoa " +
      " (A - Azual; P - Preto; V - Verde; C - Castanho): "
  );
  while (
    corOlhos !== "A" &&
    corOlhos !== "a" &&
    corOlhos !== "P" &&
    corOlhos !== "p" &&
    corOlhos !== "V" &&
    corOlhos !== "v" &&
    corOlhos !== "C" &&
    corOlhos !== "c"
  ) {
    corOlhos = scanner.question(
      "Opcao Invalida! Informe a cor dos olhos da pessoa " +
        " (A - Azul; P - Preto; V - Verde; C - Castanho): "
    );
  }

  let corCabelos = scanner.question(
    "Informe a cor dos cabelos da pessoa " +
      " (L - Louro; P - Preto; R - Ruivo; C - Castanho): "
  );
  while (
    corCabelos !== "L" &&
    corCabelos !== "l" &&
    corCabelos !== "P" &&
    corCabelos !== "p" &&
    corCabelos !== "R" &&
    corCabelos !== "r" &&
    corCabelos !== "C" &&
    corCabelos !== "c"
  ) {
    corCabelos = scanner.question(
      "Opcao Invalida! Informe a cor dos cabelos da pessoa " +
        " (L - Louro; P - Preto; R - Ruivo; C - Castanho): "
    );
  }

  if (idade > 50 && peso < 60) {
    qtdIdade++;
  }

  if (altura < 1.5) {
    qtdIdade2++;
    mediaIdade += idade;
  }

  if (corOlhos === "A" || corOlhos === "a") {
    qtdCorAzul++;
  }

  if (
    (corCabelos === "R" || corCabelos === "r") &&
    corOlhos !== "A" &&
    corOlhos !== "a"
  ) {
    qtdRuivas++;
  }
}

console.clear();
if (qtdIdade > 0) {
  console.log(
    "A quantidade de pessoas com mais de 50 anos e com menos de 60kg é " +
      qtdIdade +
      " pessoas."
  );
} else {
  console.log(
    "Não foi computada nenhuma pessoa com mais de 50 anos e menos de 60kg."
  );
}

if (qtdIdade2 > 0) {
  mediaIdade = mediaIdade / qtdIdade2;
  console.log(
    "A média de idade das pessoas com menos de 1.5m de altura foi de " +
      mediaIdade.toFixed(2) +
      " anos."
  );
} else {
  console.log("Não foram informadas pessoas com menos de 1.50m de altura.");
}

if (qtdCorAzul > 0) {
  let perc = (qtdCorAzul * 100) / 6;
  console.log(
    "A porcentagem de pessoas, dentre todas, com a cor dos olhos Azul foi de " +
      perc.toFixed(2) +
      "%."
  );
} else {
  console.log("Não foi informada nenhuma pessoa com os olhos Azul.");
}

if (qtdRuivas > 0) {
  console.log(
    "A quantidade de pessoas ruivas que não possui olhos azuis foi de " +
      qtdRuivas +
      " pessoas."
  );
} else {
  console.log("Não foram informadas nenhuma pessoa com cabelo ruivo.");
}
