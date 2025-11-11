/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 18
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function criptografarPalavra(palavra) {
  let novaPalavra = "";

  let metade = palavra.substring(Math.ceil(palavra.length / 2));

  for (let i = 0; i < metade.length; i++) {
    novaPalavra += palavra.charAt(i);
  }

  for (let i = metade.length; i < palavra.length; i++) {
    novaPalavra += "?";
  }

  return novaPalavra;
}

function criptografar(texto) {
  let novoTexto = "";
  let palavras = texto.split(" ");
  let contador = 0;

  while (contador < palavras.length) {
    novoTexto += criptografarPalavra(palavras[contador]) + " ";
    contador++;
  }

  return novoTexto;
}

let texto = scanner.question("Digite uma mensagem: ");
console.clear();

console.log("Mensagem Digitado: " + texto);
let textoCriptografado = criptografar(texto);
console.log("Mensagem Criptografada: " + textoCriptografado);
