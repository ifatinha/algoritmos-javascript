/** Capitulo 06 - Vetores: Exemplo 11
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const temperaturas = [];
const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julio",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
let maiorTemperatura;
let menorTemperatura;
let maiorMes;
let menorMes;

for (let i = 0; i < 12; i++) {
  temperaturas.push(
    scanner.questionFloat(
      "Digite a temperatura média do mes de " + meses[i] + ": "
    )
  );

  if (i === 0) {
    maiorTemperatura = temperaturas[i];
    menorTemperatura = temperaturas[i];
  } else {
    if (maiorTemperatura < temperaturas[i]) {
      maiorTemperatura = temperaturas[i];
      maiorMes = i;
    }

    if (menorTemperatura > temperaturas[i]) {
      menorTemperatura = temperaturas[i];
      menorMes = i;
    }
  }
}

console.clear();

console.log(
  "A Maior termperatura do ano foi de " +
    maiorTemperatura +
    "ºC. E ocorreu no mês de " +
    meses[maiorMes]
);

console.log(
  "A Menor termperatura do ano foi de " +
    menorTemperatura +
    "ºC. E ocorreu no mês de " +
    meses[menorMes]
);
