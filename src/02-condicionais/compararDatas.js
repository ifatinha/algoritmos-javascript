/**
 * Compara duas datas e retorna a maior delas no formato Date.
 *
 * @category Condicionais
 * @function compararDatas
 * @param {Date} data1 - Primeira data a ser comparada
 * @param {Date} data2 - Segunda data a ser comparada
 * @returns {Date} A data cronologicamente maior
 *
 * @example
 * const maiorData = compararDatas(new Date(2025, 0, 10), new Date(2023, 5, 20));
 * console.log(maiorData.toLocaleDateString()); // "10/01/2025"
 */

export function compararDatas(data1, data2) {
  if (!(data1 instanceof Date) || !(data2 instanceof Date)) {
    throw new Error("Ambos os parâmetros devem ser instâncias de Date");
  }

  if (data1.getTime() > data2.getTime()) return data1;

  return data2;
}
