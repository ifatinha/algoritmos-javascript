/**
 * @category Array
 * @function juntaArrays
 * @description
 * Junta dois arrays de números de forma segura. Por padrão concatena os dois arrays
 * (arr1 seguido de arr2). Se a opção `interleave` for true, intercalará os elementos
 * (arr1[0], arr2[0], arr1[1], arr2[1], ...), e, caso um array seja maior, os
 * elementos excedentes serão anexados ao final.
 *
 * @param {number[]} arr1 Primeiro array de números (não vazio).
 * @param {number[]} arr2 Segundo array de números (não vazio).
 * @param {Object} [options] Opções.
 * @param {boolean} [options.interleave=false] Quando true, intercala os elementos em vez de concatenar.
 *
 * @throws {Error} Caso `arr1` ou `arr2` não sejam arrays não vazios de números válidos.
 *
 * @returns {number[]} Novo array contendo o resultado da junção.
 *
 * @example
 * juntaArrays([1,2], [3,4]) // retorno: [1,2,3,4]
 * juntaArrays([1,2,3], [4,5], { interleave: true }) // retorno: [1,4,2,5,3]
 */

function validaArrayNumeros(arr, nome) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error(`O parâmetro '${nome}' deve ser um array não vazio.`);
  }

  arr.forEach((numero) => {
    if (typeof numero !== "number" || Number.isNaN(numero)) {
      throw new Error(
        `O parâmetro '${nome}' deve conter apenas números válidos.`
      );
    }
  });
}

export function juntaArrays(arr1, arr2, { interleave = false } = {}) {
  validaArrayNumeros(arr1, "arr1");
  validaArrayNumeros(arr2, "arr2");

  if (!interleave) {
    return [...arr1, ...arr2];
  }

  const resultado = [];
  const maxLen = Math.max(arr1.length, arr2.length);

  for (let idx = 0; idx < maxLen; idx++) {
    if (idx < arr1.length) resultado.push(arr1[idx]);
    if (idx < arr2.length) resultado.push(arr2[idx]);
  }

  return resultado;
}
