/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 01
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function inverterPalavra(palavra) {
  let palavraInvertida = "";

  for (let i = palavra.length - 1; i >= 0; i--) {
    let letra = palavra.charAt(i);

    if (
      letra !== "a" &&
      letra !== "e" &&
      letra !== "i" &&
      letra !== "o" &&
      letra !== "u"
    ) {
      letra = "#";
    }

    palavraInvertida += letra;
  }

  return palavraInvertida;
}

function inverterFrase(frase) {
  let palavras = frase.split(" ");
  palavras = palavras.reverse();
  let fraseInvertida = "";

  for (let i = 0; i < palavras.length; i++) {
    fraseInvertida += inverterPalavra(palavras[i].toLowerCase());
    fraseInvertida += " ";
  }

  return fraseInvertida;
}

let frase = scanner.question("Digite uma frase: ");
console.clear();
console.log("Frase Digitada: " + frase);

let fraseInvertida = inverterFrase(frase);
console.log("Frase Invertida " + fraseInvertida);
