/**
 * @category Strings
 * @function contarPalavras
 * @description
 * Conta o número de palavras em um texto, desconsiderando espaços múltiplos
 * e garantindo a contagem correta mesmo quando houver pontuação.
 *
 * @param {string} texto Texto a ser analisado.
 *
 * @throws {Error} Caso o parâmetro não seja uma string válida (vazia ou não-string).
 *
 * @returns {number} Quantidade de palavras encontradas.
 *
 * @example
 * contarPalavras("Aprender JavaScript é divertido!") // retorno: 4
 */

export function contarPalavras(texto) {
  if (typeof texto !== "string" || texto.trim().length === 0) {
    throw new Error("O parâmetro deve ser uma string válida");
  }

  return texto.trim().split(/\s+/).length;
}
