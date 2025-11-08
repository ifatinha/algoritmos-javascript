/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 15
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let qtdSim = 0;
let qtdNao = 0;
let qtdMulheres = 0;
let qtdHomens = 0;

for (let i = 1; i <= 10; i++) {
  let sexo = scanner.question(
    "Sexo do Participante (M - Masculino; F - Feminino): "
  );

  while (sexo !== "M" && sexo !== "m" && sexo !== "F" && sexo !== "f") {
    sexo = scanner.question(
      "Opção inválida! Escolha uma das opções (M - Masculino; F - Feminino): "
    );
  }

  let resposta = scanner.question("Resposta (S - sim; N - Não): ");
  while (
    resposta !== "s" &&
    resposta !== "S" &&
    resposta !== "N" &&
    resposta !== "n"
  ) {
    resposta = scanner.question("Opção Inválida! Digite (S - sim; N - Não): ");
  }

  if (resposta === "S" || resposta == "s") {
    if (sexo === "F" || sexo === "f") {
      qtdMulheres++;
    }
    qtdSim++;
  } else {
    qtdNao++;

    if (sexo === "M" || sexo === "m") {
      qtdHomens++;
    }
  }
}

let percHomens = (qtdHomens * 100) / 10;
let percMulheres = (qtdMulheres * 100) / 10;

console.clear();

console.log("Quantidade de pessoas que responderam SIM: " + qtdSim);
console.log("Quantidade de pessoas que responderam NÃO: " + qtdNao);
console.log(
  "O percentual de mulheres que responderam SIM foi de " + percMulheres + "%"
);
console.log(
  "O percentual de homens que responderam NÃO foi de " + percHomens + "%"
);
