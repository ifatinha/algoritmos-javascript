/**
 * @category Strings
 * @function contarVogais
 * @description
 * Conta o número de vogais em uma frase, desconsiderando maiúsculas e minúsculas.
 *
 * @param {string} frase Frase a ser analisada.
 * @throws {Error} Caso o parâmetro não seja uma string.
 * @returns {number} Quantidade total de vogais encontradas.
 *
 * @example
 * contarVogais("Olá Mundo") // retorno: 4
 */

export function contarVogais(frase) {
  if (typeof frase !== "string" || frase.length === 0) {
    throw new Error("O parâmetro deve ser uma string válida.");
  }

  
}
import scanner from "readline-sync";

function contarVogais(frase) {
  let contador = 0;
  for (let i = 0; i < frase.length; i++) {
    let codigo = frase.charCodeAt(i);
    if (
      codigo === 65 ||
      codigo === 69 ||
      codigo === 73 ||
      codigo === 79 ||
      codigo === 85 ||
      codigo === 97 ||
      codigo === 101 ||
      codigo === 105 ||
      codigo === 111 ||
      codigo === 117
    ) {
      contador++;
    }
  }

  return contador;
}

let frase = scanner.question("Digite uma frase qualquer: ");
console.clear();

console.log("Frase digitada: " + frase);
let qtdVogais = contarVogais(frase);
console.log(
  "A quantidade de vogais que existem na frase digitada foi " + qtdVogais
);
