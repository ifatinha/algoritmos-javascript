/**
 * @category Condicionais
 * @function calcularRendimentos
 *
 * @description
 * Calcula o rendimento mensal de um investimento com base no valor aplicado
 * e no tipo de investimento informado.
 *
 * Tipos de investimento:
 *  - "A" → rendimento de 3% ao mês
 *  - "B" → rendimento de 5% ao mês
 *
 * @param {number} valor - Valor aplicado no investimento (deve ser maior que 0)
 * @param {"A" | "B"} tipoInvestimento - Tipo do investimento
 *
 * @throws {Error} Se o valor for inválido ou menor/igual a zero.
 * @throws {Error} Se o tipo de investimento não for "A" ou "B".
 *
 * @returns {{ rendimentoMensal: number, valorAtualizado: number }}
 * Retorna um objeto contendo:
 *  - rendimentoMensal: quanto rendeu no mês
 *  - valorAtualizado: total após o rendimento ser aplicado
 *
 * @example
 * // Rendimento tipo A (3%)
 * calcularRendimentos(1000, "A");
 * // Retorno:
 * // {
 * //   rendimentoMensal: 30,
 * //   valorAtualizado: 1030
 * // }
 *
 * @example
 * // Rendimento tipo B (5%)
 * calcularRendimentos(2000, "B");
 * // Retorno:
 * // {
 * //   rendimentoMensal: 100,
 * //   valorAtualizado: 2100
 * // }
 */
export function calcularRendimentos(valor, tipoInvestimento) {
  if (typeof valor !== "number" || isNaN(valor) || valor <= 0) {
    throw new Error("O valor deve ser um número válido e maior que zero.");
  }

  if (!["A", "B"].includes(tipoInvestimento)) {
    throw new Error("Tipo de investimento inválido. Use 'A' ou 'B'.");
  }

  let perceRendimento = tipoInvestimento === "A" ? 0.03 : 0.05;
  const rendimentoMensal = valor * perceRendimento;
  const valorAtualizado = rendimentoMensal + valor;

  return {
    rendimentoMensal: Number(rendimentoMensal.toFixed(2)),
    valorAtualizado: Number(valorAtualizado.toFixed(2)),
  };
}
