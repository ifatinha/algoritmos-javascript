/**
 * Calcula informações sobre um produto comprado conforme tabelas fornecidas.
 * @category Condicionais
 * @function calcularProduto
 * @param {number} codProduto - Código do produto (1 a 10)
 * @param {number} pesoKg - Peso do produto em quilos
 * @param {number} codPais - Código do país de origem (1 a 3)
 * @returns {{
 *  pesoGramas: number,
 *  precoProduto: number,
 *  valorImposto: number,
 *  valorTotal: number
 * }}
 *
 * @throws {Error} Se algum parâmetro for inválido
 *
 * @example
 * calcularProduto(2, 1, 3)
 * // Retorno:
 * // {
 * //   pesoGramas: 1000,
 * //   precoProduto: 10000,
 * //   valorImposto: 2500,
 * //   valorTotal: 12500
 * // }
 */

export function calcularProduto(codProduto, pesoKg, codPais) {
  if (
    [codProduto, pesoKg, codPais].some(
      (valor) => typeof valor !== "number" || isNaN(valor) || valor < 0
    )
  ) {
    throw new Error("Todo os parâmetros devem ser números válidos.");
  }

  if (codProduto < 1 || codProduto > 10) {
    throw new Error("Código do produto inválido.");
  }

  if (codPais < 1 || codPais > 3) {
    throw new Error("Código do país inválido.");
  }

  const pesoGramas = pesoKg * 1000;
  const imposto = codPais === 1 ? 0 : codPais === 2 ? 0.15 : 0.25;
  const valorGrama =
    codProduto >= 1 && codProduto <= 4
      ? 10
      : codProduto >= 5 && codProduto <= 7
        ? 25
        : 35;

  const precoProduto = pesoGramas * valorGrama;
  const valorImposto = precoProduto * imposto;
  const valorTotal = precoProduto + valorImposto;

  return { pesoGramas, precoProduto, valorImposto, valorTotal };
}
