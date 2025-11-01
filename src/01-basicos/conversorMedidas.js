/**
 * 🔁 Converte uma medida em pés para polegadas, jardas e milhas.
 *
 * @category Básicos
 * @param {number} pes - Valor em pés que será convertido.
 * @returns {{ polegadas: number, jardas: number, milhas: number }} - Um objeto com as medidas convertidas.
 * @throws {Error} Se o valor informado não for um número ou for menor/igual a zero.
 *
 * @example
 * conversor(5280);
 * // Retorna:
 * // {
 * //   polegadas: 63360,
 * //   jardas: 1760,
 * //   milhas: 1
 * // }
 */

export function conversor(pes) {
  if (typeof pes !== "number" || isNaN(pes)) {
    throw new Error("O valor do pés deve ser um número válido.");
  }

  if (pes <= 0) {
    throw new Error("O número deve ser maior que 0.");
  }

  const polegadas = pes * 12;
  const jardas = pes / 3;
  const milhas = pes / 5280;

  return { polegadas, jardas, milhas };
}
