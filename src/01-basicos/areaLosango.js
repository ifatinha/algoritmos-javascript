/**
 * 💎 Calcula a área de um losango.
 *
 * Fórmula: A = (diagonalMaior * diagonalMenor) / 2
 *
 * @category Básicos
 * @param {number} diagonalMaior - Valor da diagonal maior (deve ser maior que zero).
 * @param {number} diagonalMenor - Valor da diagonal menor (deve ser maior que zero).
 * @returns {number} A área calculada do losango.
 *
 * @throws {Error} Se algum valor não for numérico ou for menor ou igual a zero.
 *
 * @example
 * areaLosango(10, 8);
 * // 40
 */

export function areaLosango(diagonalMaior, diagonalMenor) {
  if (
    [diagonalMaior, diagonalMenor].some(
      (value) => typeof value !== "number" || isNaN(value)
    )
  ) {
    throw new Error("Todos os valores devem ser numéricos.");
  }

  if (diagonalMaior <= 0 || diagonalMenor <= 0) {
    throw new Error("Todos os valores devem ser maiores que zero.");
  }

  return (diagonalMaior * diagonalMenor) / 2;
}
