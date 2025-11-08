/**
 * Calcula o preço final de um produto com base no tipo, refrigeração, preço e impostos.
 *
 * Critérios baseados no exercício do livro:
 * - Tipo do produto:
 *    A - Alimentação
 *    L - Limpeza
 *    V - Vestuário
 * - Refrigeração:
 *    S - Produto Refrigerado
 *    N - Não Refrigerado
 *
 * @category Condicionais
 * @function calcularPrecoFinalProduto
 * @param {number} precoProduto - Preço original do produto em Reais (>= 0)
 * @param {"A"|"L"|"V"} tipoProduto - Tipo do produto
 * @param {"S"|"N"} refrigeracao - Produto refrigerado ou não
 * @returns {{
 *  valorFinal: number,
 *  classificacao: string,
 *  valorAdicional: number,
 *  valorImposto: number,
 * }}
 *
 * @throws {Error} Se algum parâmetro for inválido.
 *
 * @example
 * calcularPrecoFinalProduto(20, "A", "N");
 * // {
 * //   valorFinal: 21.9,
 * //   classificacao: "Barato",
 * //   valorAdicional: 2,
 * //   valorImposto: 1
 * // }
 */

export function calcularPrecoFinalProduto(
  precoProduto,
  tipoProduto,
  refrigeracao
) {
  if (
    typeof precoProduto !== "number" ||
    isNaN(precoProduto) ||
    precoProduto < 0
  ) {
    throw new Error("Preço deve ser um número válido e positivo.");
  }

  if (!["A", "L", "V"].includes(tipoProduto)) {
    throw new Error("Tipo de produto inválido.");
  }

  if (!["S", "N"].includes(refrigeracao)) {
    throw new Error("Valor de refrigeração inválido.");
  }

  let valorAdicional = 0;

  if (refrigeracao === "N") {
    if (tipoProduto === "A") {
      valorAdicional = precoProduto < 15 ? 2 : 5;
    } else if (tipoProduto === "L") {
      valorAdicional = precoProduto < 10 ? 1.5 : 2.5;
    } else {
      valorAdicional = precoProduto < 30 ? 3 : 2.5;
    }
  } else {
    if (tipoProduto === "A") valorAdicional = 8;
  }

  const valorImposto =
    precoProduto < 25 ? precoProduto * 0.05 : precoProduto * 0.08;

  let precoCusto = precoProduto + valorImposto;
  let desconto = !(tipoProduto === "A") && !(refrigeracao === "S") ? 0.03 : 0;
  let valorFinal = precoCusto + valorAdicional - desconto;
  let classificacao =
    valorFinal < 50 ? "Barato" : valorFinal < 100 ? "Normal" : "Caro";

  return {
    desconto: desconto,
    valorFinal: Number(valorFinal.toFixed(2)),
    classificacao,
    valorAdicional,
    valorImposto: Number(valorImposto.toFixed(2)),
  };
}
