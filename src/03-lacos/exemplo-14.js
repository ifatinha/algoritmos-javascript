/** Capitulo 05 - estruturas de repetição: Exemplo 14
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let valorDivida = scanner.questionFloat("Informe o valor da divida: ");

let parcelas = 1;
let percJuros = 0.0;
let valorFinal = 0.0;
let valorParcela = valorDivida;
let valorJuros = 0.0;

console.log(
  "Valor da Divida".padEnd(50, ".") + ": R$" + valorDivida.toFixed(2)
);
console.log("Número de Parcelas".padEnd(50, ".") + ": " + parcelas);
console.log("Juros".padEnd(50, ".") + ": R$" + valorJuros.toFixed(2));
console.log("Valor Parcela".padEnd(50, ".") + ": R$" + valorParcela.toFixed(2));
console.log("Valor Final".padEnd(50, ".") + ": R$" + valorFinal.toFixed(2));
console.log("");

valorFinal = valorDivida + valorJuros;
parcelas = 3;
percJuros = 10;

while (parcelas <= 12) {
  valorJuros = (valorDivida * percJuros) / 100;
  valorFinal = valorDivida + valorJuros;
  valorParcela = valorFinal / parcelas;

  console.log(
    "Valor da Divida".padEnd(50, ".") + ": R$" + valorFinal.toFixed(2)
  );
  console.log("Número de Parcelas".padEnd(50, ".") + ": " + parcelas);
  console.log("Juros".padEnd(50, ".") + ": R$" + valorJuros.toFixed(2));
  console.log(
    "Valor Parcela".padEnd(50, ".") + ": R$" + valorParcela.toFixed(2)
  );
  console.log("");

  parcelas += 3;
  percJuros += 5;
}
