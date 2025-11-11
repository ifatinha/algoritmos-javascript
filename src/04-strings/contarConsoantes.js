/**
 * @category Strings
 * @function contarConsoantes
 * @description
 * Conta o número de consoantes (letras do alfabeto que não são vogais) em um texto.
 * Ignora espaços, números e caracteres especiais; é case-insensitive.
 *
 * @param {string} texto Texto a ser analisado.
 *
 * @throws {Error} Caso o parâmetro não seja uma string válida (vazia ou não-string).
 *
 * @returns {number} Quantidade de consoantes encontradas no texto.
 *
 * @example
 * contarConsoantes("Hello world") // retorno: 7
 */

export function contarConsoantes(frase) {
  if (typeof frase !== "string" || frase.trim().length === 0) {
    throw new Error("O texto deve ser uma string válida");
  }

  const consoantes = new Set([
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]);

  let contador = 0;

  for (let letra of frase.toLowerCase()) {
    if (consoantes.has(letra)) contador++;
  }

  return contador;
}
