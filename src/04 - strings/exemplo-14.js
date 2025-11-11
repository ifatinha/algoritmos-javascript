/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 14
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function formatarPalavra(palavra) {
  let palavraFormatada = "";

  for (let i = 0; i < palavra.length; i++) {
    palavraFormatada =
      i === 0
        ? (palavraFormatada += palavra.charAt(i).toUpperCase())
        : (palavraFormatada += palavra.charAt(i));
  }

  return palavraFormatada;
}

function formatarTexto(texto) {
  let novoTexto = texto.split(" ");
  let textoFormatado = "";

  for (let i = 0; i < novoTexto.length; i++) {
    let palavra = novoTexto[i];

    textoFormatado += formatarPalavra(palavra) + " ";
  }

  return textoFormatado;
}

let texto1 = scanner.question("Digite um texto: ");
console.clear();
console.log("Texto digitado: " + texto1);

let texto2 = formatarTexto(texto1.toLowerCase());
console.log("Texto formatado: " + texto2);
