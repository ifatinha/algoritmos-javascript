/**
 * 💡 Calcula a quantidade mínima de ingressos que devem ser vendidos
 * para cobrir o custo total de um espetáculo teatral.
 *
 * @category Básicos
 * @param {number} custo - Custo total do espetáculo (em reais).
 * @param {number} preco - Preço de venda de cada ingresso (em reais).
 * @returns {number} O número mínimo inteiro de ingressos que precisam ser vendidos.
 *
 * @throws {Error} Se o custo for negativo ou o preço for inválido (menor ou igual a zero).
 *
 * @example
 * calcularIngressosNecessarios(1000, 50);
 * // 20
 */

export function calcularIngressosNecessarios(custo, preco) {
  if (typeof custo !== "number" || isNaN(custo) || custo < 0) {
    throw new Error("O custo deve ser um número válido maior ou igual a zero.");
  }

  if (typeof preco !== "number" || isNaN(preco) || preco <= 0) {
    throw new Error("O preço deve ser um número válido maior que zero.");
  }

  return Math.ceil(custo / preco);
}
