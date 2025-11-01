/**
 * ⚪ Calcula a área de um círculo.
 *
 * @category Básicos
 * @param {number} raio - O raio do círculo em unidades de medida.
 * @returns {number} - A área do círculo.
 * @throws {Error} Se o raio não for um número válido.
 *
 * @example
 * calcularAreaCirculo(5);
 * // Retorna: 78.53981633974483
 */

export function calcularAreaCirculo(raio) {
  const PI = Math.PI;

  if (typeof raio !== "number" || isNaN(raio)) {
    throw new Error("O valor do raio deve ser um número válido.");
  }

  return PI * Math.pow(raio, 2);
}
