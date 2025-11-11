/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 15
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function alterarTexto(texto) {
  let novoTexto = "";

  for (let i = 0; i < texto.length; i++) {
    let letra = texto.charAt(i);

    switch (letra) {
      case 0:
        letra = "zero";
        break;
      case "1":
        letra = "um";
        break;

      case "2":
        letra = "dois";
        break;

      case "3":
        letra = "três";
        break;

      case "4":
        letra = "quatro";
        break;

      case "5":
        letra = "cinco";
        break;

      case "6":
        letra = "seis";
        break;

      case "7":
        letra = "sete";
        break;

      case "8":
        letra = "oito";
        break;

      case "9":
        letra = "nove";
        break;
    }

    novoTexto += letra;
  }

  return novoTexto;
}

let texto = scanner.question("Digite uma mensagem: ");
console.clear();

console.log("Texto Digitado: " + texto);
let textoConvertido = alterarTexto(texto);
console.log("Texto Convertido: " + textoConvertido);
