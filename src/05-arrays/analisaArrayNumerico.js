/**
 * @category Array
 * @function analisaArrayNumerico
 * @description
 * Analisa um array numérico e retorna o maior e menor valores encontrados
 * juntamente com os índices (primeira ocorrência) desses valores.
 *
 * Regras:
 * - Entrada deve ser um array não vazio.
 * - Todos os elementos devem ser números válidos (Number, não NaN).
 * - Se houver empates, o índice retornado será o da primeira ocorrência.
 *
 * @param {number[]} numeros Array de números a ser analisado.
 *
 * @throws {Error} Caso `numeros` não seja um array não vazio.
 * @throws {Error} Caso algum elemento não seja um número válido.
 *
 * @returns {{ maiorNumero: number, idxMaiorNumero: number, menorNumero: number, idxMenorNumero: number }}
 * Objeto com os valores maior/menor e seus respectivos índices.
 *
 * @example
 * analisaArrayNumerico([3, 7, 2, 7, 1])
 * // retorna:
 * // { maiorNumero: 7, idxMaiorNumero: 1, menorNumero: 1, idxMenorNumero: 4 }
 */

export function analisaArrayNumerico(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error("O parâmetro deve ser uma lista não vazia");
  }

  numeros.forEach((numero) => {
    if (typeof numero !== "number" || Number.isNaN(numero)) {
      throw new Error("Os elementos da lista devem ser números válidos");
    }
  });

  let maiorNumero = numeros[0];
  let menorNumero = numeros[0];
  let idxMaiorNumero = 0;
  let idxMenorNumero = 0;

  numeros.forEach((numero, idx) => {
    if (numero > maiorNumero) {
      maiorNumero = numero;
      idxMaiorNumero = idx;
    }

    if (numero < menorNumero) {
      menorNumero = numero;
      idxMenorNumero = idx;
    }
  });

  return {
    maiorNumero,
    idxMaiorNumero,
    menorNumero,
    idxMenorNumero,
  };
}
