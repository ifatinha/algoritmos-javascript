/**
 * @category Repetições
 * @function somarParesImpares
 * @description
 * Recebe uma lista de números inteiros e retorna a soma separada entre
 * números pares e ímpares.
 *
 * @param {number[]} numeros Lista de números inteiros
 *
 * @returns {object} Objeto contendo:
 *  - somaPares: total da soma de todos os números pares
 *  - somaImpares: total da soma de todos os números ímpares
 *
 * @throws {Error} Se o parâmetro não for um array válido ou se algum item não for número inteiro
 *
 * @example
 * somarParesImpares([1, 2, 3, 4]);
 * // {
 * //   somaPares: 6,
 * //   somaImpares: 4
 * // }
 */

export function somarParesImpares(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error("A lista deve conter ao menos um número");
  }

  let somaPares = 0;
  let somaImpares = 0;

  numeros.forEach((numero) => {
    if (
      typeof numero !== "number" ||
      isNaN(numero) ||
      !Number.isInteger(numero)
    ) {
      throw new Error("Todos os elementos devem ser números inteiros válidos.");
    }

    if (numero % 2 === 0) somaPares += numero;
    else somaImpares += numero;
  });

  return {
    somaPares,
    somaImpares,
  };
}
