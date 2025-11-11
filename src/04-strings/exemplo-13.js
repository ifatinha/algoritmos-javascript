/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 13
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function criptografarPalavra(palavra) {
  let novaPalavra = "";

  for (let i = palavra.length; i >= 0; i--) {
    novaPalavra += palavra.charAt(i);
  }

  return novaPalavra;
}

function criptografar(frase) {
  let novaFrase = frase.split(" ");
  let fraseCriptografada = "";

  for (let i = 0; i < novaFrase.length; i++) {
    fraseCriptografada += criptografarPalavra(novaFrase[i]) + " ";
  }

  return fraseCriptografada;
}

let frase = scanner.question("Digite o texto que você deseja criptografar: ");
console.clear();

console.log("Texto digitado: " + frase);

let texto = criptografar(frase);
console.log("Texto criptografado: " + texto);
