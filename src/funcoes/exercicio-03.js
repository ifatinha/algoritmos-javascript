/** Capitulo 08 - sub-rotinas: Exercicio 03
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function divisao(num1, num2) {
  if (num1 % num2 === 0) {
    return 0;
  } else {
    while (num1 % num2 !== 0) {
      num2++;
    }

    return num2;
  }
}

let num1 = scanner.questionInt("Digite o primeiro numero: ");
let num2 = scanner.questionInt("Digite o segundo numero: ");

let resultado = divisao(num1, num2);

if (resultado === 0) {
  console.log(num1 + " é divisivel por " + num2);
} else {
  console.log("O próximo divisor de " + num1 + " é " + resultado);
}
