/** Capitulo 08 - sub-rotinas: Exemplo 04
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function conveterSegundos(tempo) {
  let horas = tempo / 3600;
  let resto = tempo % 3600;
  let minutos = resto / 60;
  let segundos = resto % 60;

  let msg =
    tempo +
    " segundos equivale a " +
    Math.floor(horas) +
    "horas " +
    minutos +
    "minutos e " +
    segundos +
    "segundos";

  return msg;
}

let segundos = scanner.questionInt(
  "Informe o valor dos segundos para converter: "
);
console.log(conveterSegundos(segundos));
