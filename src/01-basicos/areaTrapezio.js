/**
 * 💡 Calcula a área de um trapézio.
 *
 * Fórmula: A = ((baseMaior + baseMenor) * altura) / 2
 *
 * @category Básicos
 * @param {number} altura - Altura do trapézio (deve ser maior que zero).
 * @param {number} baseMaior - Base maior do trapézio (deve ser maior que zero).
 * @param {number} baseMenor - Base menor do trapézio (deve ser maior que zero).
 * @returns {number} A área calculada do trapézio.
 *
 * @throws {Error} Se algum valor não for numérico ou for menor ou igual a zero.
 *
 * @example
 * areaTrapezio(10, 8, 6);
 * // 70
 */

export function areaTrapezio(altura, baseMaior, baseMenor) {
  if (
    [altura, baseMaior, baseMenor].some(
      (value) => typeof value !== "number" || isNaN(value)
    )
  ) {
    throw new Error("Todos os valores devem ser numéricos.");
  }

  if (altura <= 0 || baseMaior <= 0 || baseMenor <= 0) {
    throw new Error("Todos os valores devem ser maiores que zero.");
  }

  return ((baseMaior + baseMenor) * altura) / 2;
}
