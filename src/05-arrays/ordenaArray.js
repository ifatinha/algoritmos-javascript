/**
 * @category Array
 * @function ordenaArray
 * @description
 * Ordena um array de números em ordem crescente, sem modificar o array original.
 *
 * @param {number[]} array Array contendo números a serem ordenados.
 *
 * @throws {Error} Se `array` não for um array não vazio.
 * @throws {Error} Se algum elemento do array não for um número válido.
 *
 * @returns {number[]} Um novo array com os números ordenados em ordem crescente.
 *
 * @example
 * ordenaArray([3, 1, 4]); // retorna [1, 3, 4]
 */

export function ordenaArray(array) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("A entrada deve ser um array não vazio");
  }

  array.forEach((numero) => {
    if (typeof numero !== "number" || Number.isNaN(numero)) {
      throw new Error("O array deve conter números válidos");
    }
  });

  return [...array].sort((a, b) => a - b);
}
