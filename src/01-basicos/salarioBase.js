/**
 * 📘 Calcula o salário final de um funcionário com base em gratificação e imposto.
 *
 * O funcionário recebe:
 * - 5% de gratificação sobre o salário base.
 * - 7% de imposto sobre o salário base.
 *
 * @param {number} salarioBase - O salário base do funcionário.
 * @returns {{
 *   gratificacao: number,
 *   imposto: number,
 *   salarioFinal: number
 * }} Um objeto contendo o valor da gratificação, do imposto e do salário final.
 * @throws {Error} Se o parâmetro não for um número válido.
 *
 * @example
 * calcularSalarioFinal(1000);
 * // Retorna: { gratificacao: 50, imposto: 70, salarioFinal: 980 }
 */

export function calcularSalarioFinal(salarioBase) {
  if (typeof salarioBase !== "number" || isNaN(salarioBase)) {
    throw new Error("O parâmetro deve ser um número válido.");
  }

  const gratificacao = (salarioBase * 5) / 100;
  const imposto = (salarioBase * 7) / 100;
  const novoSalario = salarioBase + gratificacao - imposto;

  return { gratificacao, imposto, novoSalario };
}
