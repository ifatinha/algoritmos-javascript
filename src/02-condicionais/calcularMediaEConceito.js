/**
 * Calcula a média ponderada de um estudante e retorna seu conceito.
 *
 * Pesos:
 * - Trabalho de laboratório: 2
 * - Avaliação semestral: 3
 * - Exame final: 5
 *
 * Conceitos:
 * - 8,0 - 10,0 => A
 * - 7,0 - 8,0  => B
 * - 6,0 - 7,0  => C
 * - 5,0 - 6,0  => D
 * - 0,0 - 5,0  => E
 *
 * @category Condicionais
 * @param {number} trabalho - Nota do trabalho de laboratório (0 a 10)
 * @param {number} avaliacao - Nota da avaliação semestral (0 a 10)
 * @param {number} exame - Nota do exame final (0 a 10)
 * @returns {{media: number, conceito: string}} Objeto com a média e o conceito
 * @throws {Error} Se alguma nota não for um número válido ou estiver fora do intervalo 0-10
 *
 * @example
 * calcularMediaEConceito(9, 9, 9)
 * // Retorna: {media: 9.0, conceito: "A"}
 */

export function calcularMediaEConceito(trabalho, avaliacao, exame) {
  const pesos = { trabalho: 2, avaliacao: 3, exame: 5 };

  // Validação das notas
  [trabalho, avaliacao, exame].forEach((nota) => {
    if (typeof nota !== "number" || isNaN(nota)) {
      throw new Error("Todas as notas devem ser números válidos.");
    }
    if (nota < 0 || nota > 10) {
      throw new Error("As notas devem estar entre 0 e 10.");
    }
  });

  const somaNotas =
    trabalho * pesos.trabalho +
    avaliacao * pesos.avaliacao +
    exame * pesos.exame;

  const somaPesos = pesos.trabalho + pesos.avaliacao + pesos.exame;
  const media = somaNotas / somaPesos;
  let conceito = "";

  if (media >= 8) conceito = "A";
  else if (media >= 7) conceito = "B";
  else if (media >= 6) conceito = "C";
  else if (media >= 5) conceito = "D";
  else conceito = "E";

  return { media: parseFloat(media.toFixed(2)), conceito };
}
