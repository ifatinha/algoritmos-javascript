/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 23
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function palavraCriptografada(palavra) {
  let novaPalavra = "";

  for (let i = 0; i < palavra.length; i++) {
    let codigo = palavra.charCodeAt(i);

    if ((codigo >= 88 && codigo <= 90) || (codigo >= 120 && codigo <= 122)) {
      switch (codigo) {
        case 88:
          codigo = 65;
          break;
        case 89:
          codigo = 66;
          break;
        case 90:
          codigo = 67;
          break;
        case 120:
          codigo = 97;
          break;
        case 121:
          codigo = 98;
          break;
        case 122:
          codigo = 99;
          break;
      }
    } else {
      codigo += 3;
    }

    novaPalavra += String.fromCharCode(codigo);
  }

  return novaPalavra;
}

function criptografar(frase) {
  let palavras = frase.split(" ");
  let fraseCriptografada = "";

  for (let i = 0; i < palavras.length; i++) {
    fraseCriptografada += palavraCriptografada(palavras[i]) + " ";
  }

  return fraseCriptografada;
}

let frase = scanner.question("Digite a frase que você deseja criptografar: ");
console.clear();

console.log("Frase sem criptografia: " + frase);

let fraseCriptografada = criptografar(frase);
console.log("Frase Criptografada: " + fraseCriptografada);
