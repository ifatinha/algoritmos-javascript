/** Capitulo 05 - estruturas de repetição: Exemplo 19
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let m;
let n;

do {
  console.log(
    "Informe dois valores para M e N consecutivamente, onde M deve ser menor que N."
  );
  let soma = 0.0;

  m = scanner.questionInt("Digite o valor para M inteiro e positivo: ");

  while (m <= 0) {
    m = scanner.questionInt(
      "Valor invalido, digite um valor inteiro e positivo: "
    );
  }

  n = scanner.questionInt("Digite o valor para N inteiro e positivo: ");

  while (n <= 0) {
    n = scanner.questionInt(
      "Valor invalido, digite um valor inteiro e positivo: "
    );
  }

  if (m < n) {
    for (let i = m; i < n; i++) {
      soma += i;
    }

    console.log("A soma dos valores entre " + m + " e " + n + " = " + soma);
  } else {
    console.log(
      "A aplicação será encerrada! Você informou o vamor de M maior que o de N!"
    );
  }
} while (m < n);
