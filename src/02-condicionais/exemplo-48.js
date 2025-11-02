/** Exercicio Proposto 24, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let horasExtras = scanner.questionInt("Quantidade de horas extras: ");
let horasFaltadas = scanner.questionInt("Quantidade horas trabalhadas: ");

let totalHorasExtras = horasExtras - (2 / 3) * horasFaltadas;
let minutosTrabalhados = totalHorasExtras * 60;
let premio = 0.0;

if (minutosTrabalhados >= 2500) {
  premio = 500.0;
} else if (minutosTrabalhados > 1800 && minutosTrabalhados < 2500) {
  premio = 400.0;
} else if (minutosTrabalhados >= 1200 && minutosTrabalhados < 1800) {
  premio = 300.0;
} else if (minutosTrabalhados >= 600 && minutosTrabalhados < 1200) {
  premio = 200.0;
} else {
  premio = 100.0;
}

console.log("Minutos Trabalhados: " + minutosTrabalhados);
console.log("Prêmio de Natal: R$" + premio);
