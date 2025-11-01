/**
 * 📐 Calcula a área de um triângulo.
 *
 * @category Básicos
 * @param {number} base - A base do triângulo em unidades de medida.
 * @param {number} altura - A altura do triângulo em unidades de medida.
 * @returns {number} - A área do triângulo.
 * @throws {Error} Se a base ou a altura não forem números válidos.
 *
 * @example
 * calcularAreaTriangulo(10, 5);
 * // Retorna: 25
 */

export function calcularAreaTriangulo(base, altura) {
  if (typeof base !== "number" || isNaN(base)) {
    throw new Error("O valor da base deve ser um número válido.");
  }

  if (typeof altura !== "number" || isNaN(altura)) {
    throw new Error("O valor da altura deve ser um número válido.");
  }

  return (base * altura) / 2;
}
