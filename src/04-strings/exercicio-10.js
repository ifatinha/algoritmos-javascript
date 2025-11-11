/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 10
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function ultimaAparicao(frase, letra) {
  let ultimaPosicao = 0;

  for (let i = 0; i < frase.length; i++) {
    if (letra === frase.charAt(i)) {
      ultimaPosicao = i + 1;
    }
  }

  return ultimaPosicao;
}

let frase = scanner.question("Digite uma frase: ");
let letra = scanner.question(
  "Digite a letra que você deseja pesquisar na frase: "
);
console.clear();

console.log("Frase digitada: " + frase);
let posicao = ultimaAparicao(frase, letra);

if (posicao !== -1) {
  console.log(
    `A posição da última aparição da letra ${letra} na frase digitada é ${posicao}`
  );
} else {
  console.log(
    `A letra  "${posicao}" não aparece nenhuma vez na frase digitada.`
  );
}
