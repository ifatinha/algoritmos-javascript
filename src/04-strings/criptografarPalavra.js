/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 12
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

export function criptografarPalavra(palavra) {
  if (typeof palavra !== "string" || palavra.trim().length === 0) {
    throw new Error("A entrada deve ser uma string válida.");
  }

  let novaPalavra = "";

  for (let i = 0; i < palavra.length; i++) {
    novaPalavra += palavra.charAt(i);
  }

  
}

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
  novaFrase = novaFrase.reverse();
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
