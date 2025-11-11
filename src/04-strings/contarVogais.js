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

  const vogais = new Set(["a", "e", "i", "o", "u"]);
  let contador = 0;

  for (let letra of frase.toLowerCase()) {
    if (vogais.has(letra)) contador++;
  }

  return contador;
}
