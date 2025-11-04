/**
 * Verifica se três valores podem formar um triângulo e classifica o tipo.
 *
 * Regras:
 * - Cada lado deve ser maior que 0
 * - A soma de dois lados deve ser maior que o terceiro
 *
 * Tipos:
 * - Equilátero: todos os lados são iguais
 * - Isósceles: dois lados iguais
 * - Escaleno: todos os lados diferentes
 *
 * @category Condicionais
 * @function verificarTriangulo
 * @param {number} x - Comprimento do primeiro lado
 * @param {number} y - Comprimento do segundo lado
 * @param {number} z - Comprimento do terceiro lado
 * @returns {"Equilátero"|"Isósceles"|"Escaleno"} - O tipo de triângulo
 * @throws {Error} Se os parâmetros não forem números válidos
 * @throws {Error} Se os valores não formarem um triângulo
 *
 *  * @example
 * verificarTriangulo(3, 3, 3)
 * // Retorno: "Equilátero"
 */

export function verificarTriangulo(x, y, z) {
  if (
    [x, y, z].some(
      (lado) => typeof lado !== "number" || isNaN(lado) || lado <= 0
    )
  ) {
    throw new Error("Os parâmetros devem ser números válidos.");
  }

  if (x < y + z && y < x + z && z < x + y) {
    if (x === y && y === z) {
      return "Equilátero";
    } else if (x === y || x === z || y === z) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  }

  throw new Error("Os valores informados não forma triângulo!");
}
