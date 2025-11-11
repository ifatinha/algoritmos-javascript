/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 11
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function contador(frase) {
  let palavras = frase.split(" ");
  const aparicoes = [];

  for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i];
    let qtd = null;

    if (aparicoes.includes(palavra) === false) {
      aparicoes.push(palavra);
      let pattern = new RegExp(palavra, "gi");
      qtd = frase.match(pattern);
      console.log(
        "A palavra " + palavra + " aparece " + qtd.length + " veze(s) na frase."
      );
    }
  }
}

let frase = scanner.question("Digite uma frase: ");
console.clear();

console.log("Frase  Digitada: " + frase);
contador(frase.toLowerCase());
