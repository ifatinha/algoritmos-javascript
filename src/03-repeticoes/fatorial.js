/**
 * @category Repetições
 * @function fatorial
 * @description
 * Calcula o fatorial de um número inteiro positivo utilizando laço de repetição.
 * O fatorial de um número `n` é definido como:
 * `n! = n × (n - 1) × ... × 1`
 *
 * @param {number} numero - Número inteiro >= 0 a ser calculado.
 *
 * @throws {Error} Se o parâmetro não for um número inteiro válido ou for negativo.
 *
 * @returns {number} Resultado do fatorial.
 *
 * @example
 * fatorial(5) // 120
 *
 * @example
 * fatorial(0) // 1
 */

export function fatorial(numero) {
  if (
    typeof numero !== "number" ||
    isNaN(numero) ||
    !Number.isInteger(numero) ||
    numero < 0
  ) {
    throw new Error("O parâmetro deve ser um número válido e maior que zero.");
  }

  if (numero === 0) return 1;

  let resultado = 1;

  for (let idx = 1; idx <= numero; idx++) {
    resultado *= idx;
  }

  return resultado;
}
