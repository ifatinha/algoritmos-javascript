/**
 * @category Array
 * @function separaPositivosENegativos
 * @description
 * Separa um array de números em dois arrays: `positivos` (números >= 0) e `negativos` (números < 0).
 * Preserva a ordem original dos elementos e não altera o array de entrada.
 *
 * @param {number[]} arr Array de números a ser separado.
 *
 * @throws {Error} Caso `arr` não seja um array não vazio de números válidos.
 *
 * @returns {{positivos: number[], negativos: number[]}} Objeto com arrays `positivos` e `negativos`.
 *
 * @example
 * separaPositivosENegativos([1, -2, 0, 5, -3]) // retorno: { positivos: [1,0,5], negativos: [-2,-3] }
 */

function validaArrayENumeros(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("A entrada deve ser um array não vazio");
  }

  arr.forEach((numero) => {
    if (typeof numero !== "number" || Number.isNaN(numero)) {
      throw new Error("Os elementos do array devem ser números válidos");
    }
  });
}

export function separaPositivosENegativos(arr) {
  validaArrayENumeros(arr);

  let positivos = [];
  let negativos = [];

  for (let numero of arr) {
    if (numero >= 0) {
      positivos.push(numero);
    } else {
      negativos.push(numero);
    }
  }
  return { positivos, negativos };
}
