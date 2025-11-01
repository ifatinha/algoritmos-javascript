/**
 * 🧮 Calcula potências e raízes de um número positivo.
 *
 * @category Básicos
 * @param {number} numero - Um número positivo e maior que zero.
 * @returns {{quadrado: number, cubo: number, raizQuadrada: number, raizCubica: number}}
 * Um objeto contendo o número ao quadrado, ao cubo, a raiz quadrada e a raiz cúbica.
 * @throws {Error} Se o número não for válido ou for menor/igual a zero.
 *
 * @example
 * calcularPotenciasERaizes(8);
 * // Retorna:
 * // {
 * //   quadrado: 64,
 * //   cubo: 512,
 * //   raizQuadrada: 2.828,
 * //   raizCubica: 2
 * // }
 */

export function calcularPotenciasERaizes(numero) {
  if (typeof numero !== "number" || isNaN(numero)) {
    throw new Error("O valor do raio deve ser um número válido.");
  }

  if (numero < 0) {
    throw new Error("O número deve ser maior que 0.");
  }

  const quadrado = Math.pow(numero, 2);
  const cubo = Math.pow(numero, 3);
  const raizQuadrada = Math.sqrt(numero);
  const raizCubica = Math.cbrt(numero);

  return { quadrado, cubo, raizQuadrada, raizCubica };
}
