/**
 * 💡 Calcula o valor a ser pago por uma residência pelo consumo de energia elétrica.
 *
 * O preço do quilowatt é equivalente a 1/5 do salário mínimo.
 *
 * @category Básicos
 * @param {number} salarioMinimo - Valor do salário mínimo atual.
 * @param {number} quantidadeKW - Quantidade de quilowatts consumidos pela residência.
 * @returns {{
 *   valorKW: number,
 *   valorTotal: number,
 *   valorDesconto: number,
 *   valorComDesconto: number
 * }}
 * Retorna o valor de cada KW, o total, o desconto e o valor final com desconto aplicado.
 *
 * @throws {Error} Se os parâmetros não forem números válidos e maiores que zero.
 *
 * @example
 * calcularContaEnergia(1320, 250);
 * // {
 * //   valorKW: 264,
 * //   valorTotal: 66000,
 * //   valorDesconto: 9900,
 * //   valorComDesconto: 56100
 * // }
 */

export function calcularContaEnergia(salarioMinimo, quantidadeKW) {
  if (
    [salarioMinimo, quantidadeKW].some(
      (item) => typeof item !== "number" || isNaN(item)
    )
  ) {
    throw new Error("Os parâmetros devem ser números válidos.");
  }

  if (salarioMinimo <= 0 || quantidadeKW <= 0) {
    throw new Error("Os valores devem ser maiores que zero.");
  }

  const valorKW = salarioMinimo / 5;
  const valorTotal = valorKW * quantidadeKW;
  const valorDesconto = valorTotal * 0.15;
  const valorComDesconto = valorTotal - valorDesconto;

  return { valorKW, valorTotal, valorDesconto, valorComDesconto };
}
