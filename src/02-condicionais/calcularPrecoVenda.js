/**
 * Calcula o preço de venda de um veículo com base no preço de fábrica,
 * aplicando percentuais de imposto do distribuidor e impostos diversos
 * conforme a tabela proposta no exercício.
 *
 * @category Condicionais
 * @function calcularPrecoVenda
 *
 * Tabela:
 * Preço de fábrica | Distribuidor | Impostos
 * <= 15000         |     5%       |    0%
 * < 30000          |    10%       |   15%
 * >= 30000         |    15%       |   20%
 *
 * Classificação do preço de venda:
 * - <= 12000 → Categoria A
 * - > 12000 e <= 25000 → Categoria B
 * - > 25000 → Categoria C
 *
 * @param {number} precoFabrica - Preço de fábrica do veículo
 * @returns {{
 *  precoFabrica:number,
 *  precoVenda:number,
 *  valorDistribuidor:number,
 *  valorImpostos:number,
 *  classificacao:string
 * }}
 *
 * @example
 * calcularPrecoVenda(15000);
 * // {
 * //   precoVenda: 15750,
 * //   classificacao: "B"
 * // }
 */
export function calcularPrecoVenda(precoFabrica) {
  if (
    typeof precoFabrica !== "number" ||
    isNaN(precoFabrica) ||
    precoFabrica < 0
  ) {
    throw new Error("O preço de fábrica deve ser um valor válido.");
  }

  let percDistribuidor =
    precoFabrica <= 15000 ? 0.05 : precoFabrica < 30000 ? 0.1 : 0.15;
  let percImposto =
    precoFabrica <= 15000 ? 0 : precoFabrica < 30000 ? 0.15 : 0.2;

  const valorDistribuidor = precoFabrica * percDistribuidor;
  const valorImpostos = precoFabrica * percImposto;
  const precoVenda = precoFabrica + valorDistribuidor + valorImpostos;

  let classificacao =
    precoVenda <= 12000 ? "A" : precoVenda <= 25000 ? "B" : "C";

  return {
    precoFabrica: Number(precoFabrica.toFixed(2)),
    valorDistribuidor: Number(valorDistribuidor.toFixed(2)),
    valorImpostos: Number(valorImpostos.toFixed(2)),
    precoVenda: Number(precoVenda.toFixed(2)),
    classificacao,
  };
}
