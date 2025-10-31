/** Capitulo 08 - sub-rotinas: Exemplo 09
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const numeros = [];

function maior(n1, n2, n3, n4, n5) {
  return Math.max(n1, n2, n3, n4, n5);
}

function menor(n1, n2, n3, n4, n5) {
  return Math.min(n1, n2, n3, n4, n5);
}

function lerNumeros() {
  for (let i = 1; i <= 5; i++) {
    //numeros.push(scanner.questionInt("Digite o " + i + "º numero: "));
    numeros.push(Math.floor(Math.random() * 999 + 1));
  }
}

function verificarNumeros() {
  console.log("Números lidos: " + numeros.join(" - "));
  console.log(
    "O maior número lido foi " +
      maior(numeros[0], numeros[1], numeros[2], numeros[3], numeros[4])
  );
  console.log(
    "O menor número lido foi " +
      menor(numeros[0], numeros[1], numeros[2], numeros[3], numeros[4])
  );
}

lerNumeros();
verificarNumeros();
