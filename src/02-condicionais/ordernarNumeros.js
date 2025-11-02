/**
 * Retorna um conjunto de números em ordem crescente.
 *
 * @param {number[]} num1 - Array com os números a serem ordenados
 * @returns {number[]} Array com os números em ordem crescente
 * @throws {Error} Se algum dos valores não for um número válido ou se houver números repetidos
 *
 * @example
 * // Retorna [2, 5, 7]
 * ordenarNumeros(5, 2, 7);
 */

export function ordenarNumeros(...numeros) {
  numeros.forEach((numero) => {
    if (typeof numero !== "number" || isNaN(numero)) {
      throw new Error("Todos os valores devem ser números válidos.");
    }
  });

  if (new Set(numeros).size !== numeros.length) {
    throw new Error("Os números não podem ser repetidos.");
  }

  return numeros.sort((a, b) => a - b);
}
