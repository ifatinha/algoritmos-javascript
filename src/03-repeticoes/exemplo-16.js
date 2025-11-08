/** Capitulo 05 - estruturas de repetição: Exemplo 16
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

console.log("Informe os dados para calcular o valor da area do triângulo");

let base = scanner.questionFloat("Informe o valor da base: ");

while (base <= 0) {
  base = scanner.questionFloat(
    "Valor Invalido! Informe um valor maior que 0: "
  );
}

let altura = scanner.questionFloat("Informe o valor da altura: ");

while (altura <= 0) {
  altura = scanner.questionFloat(
    "Valor Invalido! Informe um valor maior que 0: "
  );
}

let area = (base * altura) / 2;

console.log(
  "Valor da area de um triangulo com base " +
    base +
    " e altura " +
    altura +
    " = " +
    area.toFixed(2)
);
