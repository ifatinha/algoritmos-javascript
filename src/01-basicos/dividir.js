/**
 * 📘 Função que realiza a divisão entre dois números.
 *
 * @param {number} a - O dividendo (número a ser dividido).
 * @param {number} b - O divisor (número pelo qual será feita a divisão).
 * @returns {number} O resultado da divisão de `a` por `b`.
 * @throws {Error} Se algum parâmetro não for número ou se tentar dividir por 0.
 *
 * @example
 * dividir(10, 2); // Retorna 5
 * dividir(9, 3); // Retorna 3
 */

export function dividir(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Os parâmetros devem ser números.");
  }

  if (b === 0) {
    throw new Error("Divisão por 0 não é permitida.");
  }

  return a / b;
}
