/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 19
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function criptografar(texto) {
  let novoTexto = "";
  let palavras = texto.split(" ");
  let contador = 0;

  while (contador < texto.length) {
    let letra = texto.charAt(contador);

    if (letra !== " ") {
      if (
        letra === "a" ||
        letra === "e" ||
        letra === "i" ||
        letra === "o" ||
        letra === "u" ||
        letra === "A" ||
        letra === "E" ||
        letra === "I" ||
        letra === "O" ||
        letra === "U"
      ) {
        switch (letra) {
          case "a":
          case "A":
            letra = "1";
            break;

          case "e":
          case "E":
            letra = "2";
            break;

          case "i":
          case "I":
            letra = "3";
            break;

          case "o":
          case "O":
            letra = "4";
            break;

          case "u":
          case "U":
            letra = "5";
            break;
        }
      }
    }

    novoTexto += letra;
    contador++;
  }

  return novoTexto;
}

let texto = scanner.question("Digite uma mensagem: ");
console.clear();

console.log("Mensagem Digitado: " + texto);
let textoCriptografado = criptografar(texto);
console.log("Mensagem Criptografada: " + textoCriptografado);
