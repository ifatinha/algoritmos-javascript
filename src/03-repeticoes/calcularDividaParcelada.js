/**
 * @category Repetições
 * @function calcularDividaParcelada
 * @description
 * Calcula os valores de uma dívida ao ser parcelada em diferentes opções,
 * aplicando juros progressivos conforme a quantidade de parcelas.
 *
 * Tabela de cálculo:
 * - 1x: sem juros
 * - 3x: +10%
 * - 6x: +15%
 * - 9x: +20%
 * - 12x: +25%
 *
 * Entrada: valor total da dívida
 *
 * Saída: lista com objetos representando cada condição de parcelamento:
 *  {
 *    parcela: número total de parcelas
 *    juros: valor total de juros aplicado
 *    valorFinal: total a pagar após juros
 *    valorParcela: valor de cada parcela
 *  }
 *
 * @param {number} valorDivida Valor original da dívida (deve ser > 0)
 *
 * @throws {Error} Se o valor da dívida for inválido
 *
 * @returns {Array<Object>} Lista com os cálculos de parcelamento
 *
 * @example
 * calcularDividaParcelada(1000)
 * // retorna algo como:
 * // [
 * //  { parcela: 1, juros: 0, valorFinal: 1000, valorParcela: 1000 },
 * //  { parcela: 3, juros: 100, valorFinal: 1100, valorParcela: 366.67 },
 * //  ...
 * // ]
 */

export function calcularDividaParcelada(valorDivida) {
  if (
    typeof valorDivida !== "number" ||
    isNaN(valorDivida) ||
    valorDivida <= 0
  ) {
    throw new Error("O valor da dívida deve ser um número maior que zero.");
  }

  const resultados = [];
  let parcelas = 1;
  let percJuros = 0;

  while (parcelas <= 12) {
    const juros = (valorDivida * percJuros) / 100;
    const valorFinal = valorDivida + juros;
    const valorParcela = valorFinal / parcelas;

    resultados.push({
      parcela: parcelas,
      juros: Number(juros.toFixed(2)),
      valorParcela: Number(valorParcela.toFixed(2)),
      valorFinal: Number(valorFinal.toFixed(2)),
    });

    parcelas += 3;
    percJuros += 5;
  }

  return resultados;
}