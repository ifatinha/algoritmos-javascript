/**
 * Calcula o novo preço de um produto com base na venda média mensal e no preço atual.
 *
 * @category Condicionais
 * @function calcularPrecoProduto
 * @param {number} preco - Preço atual do produto (maior ou igual a 0)
 * @param {number} vendaMensal - Venda média mensal do produto (maior ou igual a 0)
 * @returns {number} Novo preço do produto após ajuste
 *
 * @example
 * const novoPreco = calcularPrecoProduto(25, 400);
 * return // 27.5
 */

export function calcularPrecoProduto(preco, vendaMensal) {
  if (typeof preco !== "number" || isNaN(preco) || preco < 0) {
    throw new Error("Preço deve ser um número positivo válido.");
  }

  if (
    typeof vendaMensal !== "number" ||
    isNaN(vendaMensal) ||
    vendaMensal < 0
  ) {
    throw new Error("Venda mensal deve ser um número positivo válido.");
  }

  let novoPreco = preco;

  if (vendaMensal < 500 && preco < 30) {
    novoPreco = preco * 1.1;
  } else if (
    (vendaMensal >= 500 && vendaMensal < 1200) &&
    (preco >= 30 && preco < 80)
  ) {
    novoPreco = preco * 1.15;
  } else if (vendaMensal >= 1200 && preco >= 80) {
    novoPreco = preco * 0.8;
  }

  return Number(novoPreco.toFixed(2));
}
