/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 14
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function converterLetras(texto) {
  let novoTexto = "";

  for (let i = 0; i < texto.length; i++) {
    let letra = texto.charAt(i);

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
        letra = letra.toUpperCase();
      } else {
        letra = letra.toLowerCase();
      }
    }

    novoTexto += letra;
  }

  return novoTexto;
}

let texto = scanner.question("Digite uma mensagem: ");
console.clear();

console.log("Texto Digitado: " + texto);
let textoConvertido = converterLetras(texto);
console.log("Texto Convertido: " + textoConvertido);
