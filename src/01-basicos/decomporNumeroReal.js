/**
 * 💡 Decompõe um número real em suas partes inteira, fracionária e arredondamentos.
 *
 * @category Básicos
 * @param {number} numero - Um número real (positivo ou negativo).
 * @returns {{
 *   parteInteira: number,
 *   parteFracionaria: number,
 *   numeroArredondado: number,
 *   arredondadoParaCima: number,
 *   arredondadoParaBaixo: number
 * }} Retorna um objeto contendo as decomposições e arredondamentos do número.
 *
 * @throws {Error} Se o parâmetro não for um número real válido.
 *
 * @example
 * decomporNumeroReal(5.73);
 * // {
 * //   parteInteira: 5,
 * //   parteFracionaria: 0.73,
 * //   numeroArredondado: 6,
 * //   arredondadoParaCima: 6,
 * //   arredondadoParaBaixo: 5
 * // }
 */

export function decomporNumeroReal(numero) {
  if (typeof numero !== "number" || isNaN(numero)) {
    throw new Error("O valor deve ser um número real válido.");
  }

  const parteInteira = Math.trunc(numero);
  const parteFracionaria = parseFloat((numero - parteInteira).toFixed(10));
  const numeroArredondado = Math.round(numero);
  const arredondadoParaCima = Math.ceil(numero);
  const arredondadoParaBaixo = Math.floor(numero);

  return {
    parteInteira,
    parteFracionaria,
    numeroArredondado,
    arredondadoParaCima,
    arredondadoParaBaixo,
  };
}
