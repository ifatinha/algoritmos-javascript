/**
 * @file Multiplicação de dois números
 * @description Função que retorna o produto entre dois números.
 * @module multiplicacao
 */

/**
 * Calcula o produto de dois números.
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O resultado da multiplicação.
 * @example
 * // Exemplo de uso:
 * const resultado = multiplicar(5, 3);
 * console.log(resultado); // 15
 */

export function multiplicar(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Os parâmetros devem ser números.");
  }

  return a * b;
}
