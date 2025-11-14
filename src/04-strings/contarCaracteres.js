/**
 * @category Strings
 * @function contarCaracteres
 * @description
 * Analisa um texto e retorna a quantidade de letras, números e espaços.
 * Ignora acentos ao considerar letras (conta apenas A–Z e a–z).
 *
 * @param {string} texto Texto que será analisado.
 *
 * @throws {Error} Caso o parâmetro não seja uma string válida.
 *
 * @returns {Object} Objeto contendo:
 * - {number} letras   Quantidade de letras A–Z.
 * - {number} numeros  Quantidade de dígitos 0–9.
 * - {number} espacos  Quantidade de espaços simples.
 *
 * @example
 * contarCaracteres("Olá 123");
 * // retorno:
 * // { letras: 3, numeros: 3, espacos: 1 }
 */

export function contarCaracteres(texto) {
  if (typeof texto !== "string" || texto.length === 0) {
    throw new Error("A entrada deve ser uma string válida");
  }

  const letras = texto.match(/[a-zA-Z]/g) || [];
  const numeros = texto.match(/[0-9]/g) || [];
  const espacos = texto.match(/[" "]/g) || [];

  return {
    letras: letras.length,
    numeros: numeros.length,
    espacos: espacos.length,
  };
}
