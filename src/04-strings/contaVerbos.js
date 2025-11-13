/**
 * @category Strings
 * @function contaVerbos
 * @description
 * Conta quantas palavras terminam em "r", assumindo que são verbos
 * no infinitivo (critério simples). Ignora pontuação colada às palavras.
 *
 * @param {string} texto Texto a ser analisado.
 *
 * @throws {Error} Se `texto` não for uma string válida.
 *
 * @returns {number} Quantidade de verbos encontrados.
 *
 * @example
 * contaVerbos("Eu quero amar, viver e cantar");
 * // retorna 3
 */

export function contaVerbos(texto) {
  if (typeof texto !== "string" || texto.trim().length === 0) {
    throw new Error("A entrada deve ser uma string válida");
  }

  const palavras = texto
    .trim()
    .split(/\s+/)
    .map((p) => p.replace(/[.,;:!?()"']/g, ""));

  return palavras.filter((palavra) => palavra.toLowerCase().endsWith("r"))
    .length;
}
