/**
 * 📘 Calcula o rendimento de um depósito com base em uma taxa de juros.
 *
 * @category Básicos
 * @param {number} valorDeposito - O valor inicial depositado.
 * @param {number} taxaJuros - A taxa de juros em percentual (%).
 * @returns {{ rendimento: number, saldoFinal: number }} - O rendimento obtido e o saldo final após o rendimento.
 * @throws {Error} Se algum dos parâmetros não for um número válido.
 *
 * @example
 * calcularRendimento(1000, 5);
 * // Retorna: { rendimento: 50, saldoFinal: 1050 }
 */

export function calcularRendimentos(valorDeposito, taxaJuros) {
  if (typeof valorDeposito !== "number" || isNaN(valorDeposito)) {
    throw new Error("O valor do depósito deve ser um número válido.");
  }

  if (typeof taxaJuros !== "number" || isNaN(taxaJuros)) {
    throw new Error("A taxa de juros deve ser um número válido.");
  }

  const rendimento = (valorDeposito * taxaJuros) / 100;
  const saldoFinal = valorDeposito + rendimento;

  return { rendimento, saldoFinal };
}
