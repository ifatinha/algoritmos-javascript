/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 02
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function contarConsoantes(frase) {
  let contador = 0;
  for (let i = 0; i < frase.length; i++) {
    let codigo = frase.charCodeAt(i);
    if (
      codigo !== 65 &&
      codigo !== 69 &&
      codigo !== 73 &&
      codigo !== 79 &&
      codigo !== 85 &&
      codigo !== 97 &&
      codigo !== 101 &&
      codigo !== 105 &&
      codigo !== 111 &&
      codigo !== 117
    ) {
      contador++;
    }
  }

  return contador;
}

let frase = scanner.question("Digite uma frase qualquer: ");
console.clear();

console.log("Frase digitada: " + frase);
let qtdConsoantes = contarConsoantes(frase);
console.log(
  "A quantidade de consoantes que existem na frase digitada foi " +
    qtdConsoantes
);
