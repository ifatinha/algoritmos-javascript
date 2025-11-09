/**
 * @category Repetições
 * @function verificarPrimo
 * @description
 * Verifica se um número é primo.
 *
 * Um número é considerado primo quando possui apenas dois divisores: 1 e ele mesmo.
 *
 * @param {number} numero - Número inteiro positivo a ser verificado.
 *
 * @returns {string} "Primo" ou "Não primo" dependendo da análise.
 *
 * @example
 * verificarPrimo(7);
 * // "Primo"
 *
 * @example
 * verificarPrimo(8);
 * // "Não primo"
 *
 * @throws {Error} Se o parâmetro não for um número válido maior que zero.
 */

export function verificarPrimo(numero) {
  if (
    typeof numero !== "number" ||
    isNaN(numero) ||
    !Number.isInteger(numero)
  ) {
    throw new Error("O parâmetro deve ser um número inteiro válido.");
  }

  let qtdDivisores = 0;

  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) qtdDivisores++;
  }

  return qtdDivisores === 2 ? "Primo" : "Não primo";
}
