/** Capitulo 05 - estruturas de repetição: Exemplo 07
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let qtdElementos = scanner.questionInt(
  "Informe quantos termos da sequencia de Fibonnaci voce que ver: "
);
let anterior = 0;
let posterior = 1;
let corrente;

console.log(anterior);
console.log(posterior);
for (let i = 0; i < qtdElementos; i++) {
  corrente = anterior + posterior;
  console.log(corrente);

  anterior = posterior;
  posterior = corrente;
}
