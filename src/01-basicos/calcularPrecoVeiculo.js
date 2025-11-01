/**
 * 💰 Calcula o preço final de um veículo considerando o lucro do distribuidor e os impostos.
 *
 * @category Básicos
 * @param {number} precoFabrica - Preço de fábrica do veículo.
 * @param {number} percentualDistribuidor - Percentual de lucro do distribuidor (%).
 * @param {number} percentualImposto - Percentual de imposto (%).
 * @returns {{ lucroDistribuidor: number, imposto: number, precoFinal: number }}
 * - Lucro do distribuidor, valor do imposto e preço final do veículo.
 * @throws {Error} Se algum parâmetro não for um número válido.
 *
 * @example
 * calcularPrecoFinal(10000, 20, 15);
 * // Retorna:
 * // {
 * //   lucroDistribuidor: 2000,
 * //   imposto: 1500,
 * //   precoFinal: 13500
 * // }
 */

export function calcularPrecoFinal(
  precoFabrica,
  percentualDistribuidor,
  percentualImposto
) {
  if (
    [precoFabrica, percentualDistribuidor, percentualImposto].some(
      (parametro) => typeof parametro !== "number" || isNaN(parametro)
    )
  ) {
    throw new Error("Todos os parâmetros devem ser números.");
  }

  const lucroDistribuidor = (precoFabrica * percentualDistribuidor) / 100;
  const imposto = (precoFabrica * percentualImposto) / 100;
  const precoFinal = precoFabrica + lucroDistribuidor + imposto;

  return { lucroDistribuidor, imposto, precoFinal };
}
