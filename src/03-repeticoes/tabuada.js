/**
 * @category Repetições
 * @function tabuada
 * @description
 * Gera a tabuada de multiplicação de um número de 1 a 10.
 *
 * @param {number} numero - Número inteiro positivo para calcular a tabuada.
 *
 * @returns {number[]} Lista de resultados da tabuada até 10.
 *
 * @example
 * tabuada(5);
 * // [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
 *
 * @throws {Error} Se o número não for inteiro e maior que zero.
 */

export function tabuada(numero) {
  if (
    typeof numero !== "number" ||
    isNaN(numero) ||
    !Number.isInteger(numero) ||
    numero <= 0
  ) {
    throw new Error("O número deve ser inteiro e maior que zero.");
  }

  const resultado = [];

  for (let i = 0; i <= 10; i++) {
    resultado.push(numero * i);
  }

  return resultado;
}
