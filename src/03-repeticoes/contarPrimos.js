/**
 * @category Repetições
 * @function contarPrimos
 * @description
 * Conta quantos números primos existem em uma lista fornecida.
 *
 * @param {number[]} numeros - Lista de números inteiros positivos
 *
 * @returns {object} Estatística contendo:
 *  - qtdPrimos: quantidade de números primos encontrados
 *
 * @throws {Error} Caso o array seja inválido ou contenha valores não inteiros
 *
 * @example
 * contarPrimos([2, 3, 4, 5, 10]);
 * // { qtdPrimos: 3 }
 */

export function contarPrimos(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error("A lista deve conter ao menos um número.");
  }

  let qtdPrimos = 0;

  numeros.forEach((numero) => {
    let qtdDivisores = 0;

    if (
      typeof numero !== "number" ||
      isNaN(numero) ||
      !Number.isInteger(numero) ||
      numero < 0
    ) {
      throw new Error("Todos os elementos devem ser números inteiros válidos.");
    }

    for (let i = 1; i <= numero; i++) {
      if (numero % i === 0) qtdDivisores++;
    }

    if (qtdDivisores === 2) qtdPrimos++;
  });

  return qtdPrimos;
}
