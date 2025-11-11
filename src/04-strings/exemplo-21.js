/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 21
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function abreviarNome(nome) {
  let nomes = nome.split(" ");
  let nomeAbreviado = nomes[nomes.length - 1] + ", ";

  for (let i = 0; i < nomes.length - 1; i++) {
    nomeAbreviado += nomes[i].charAt(0) + ". ";
  }

  return nomeAbreviado;
}

let nomeCompleto = scanner.question("Digite seu nome completo: ");
console.clear();

console.log("Nome Completo: " + nomeCompleto);
let nomeAbreviado = abreviarNome(nomeCompleto);
console.log("Nome Abreviado: " + nomeAbreviado);
