/**
 * Verifica se um número inteiro é par ou ímpar.
 *
 * @category Condicionais
 * @param {number} numero - Número inteiro a ser verificado.
 * @returns {"par"|"impar"} Retorna `"par"` se o número for par e `"impar"` caso contrário.
 * @throws {Error} Se o valor não for um número inteiro válido.
 *
 * @example
 * // Retorna "par"
 * parOuImpar(10);
 *
 * @example
 * // Retorna "impar"
 * parOuImpar(7);
 */

export function parOuImpar(numero) {
  if (
    typeof numero !== "number" ||
    !Number.isInteger(numero) ||
    isNaN(numero)
  ) {
    throw new Error("O valor deve ser um número inteiro válido");
  }

  return numero % 2 === 0 ? "par" : "impar";
}
