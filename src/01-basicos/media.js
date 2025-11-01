/**
 * 📘 Calcula a média aritmética de três notas e retorna a situação do aluno.
 *
 * @param {number} nota1 - Primeira nota.
 * @param {number} nota2 - Segunda nota.
 * @param {number} nota3 - Terceira nota.
 * @returns {{ media: number, status: string }} Um objeto com a média e o status ("Aprovado" ou "Reprovado").
 * @throws {Error} Se algum parâmetro não for um número.
 *
 * @example
 * calcularMedia(8, 7, 6); // { media: 7, status: "Aprovado" }
 * calcularMedia(5, 4, 6); // { media: 5, status: "Reprovado" }
 */

export function calcularMedia(nota1, nota2, nota3) {
  if (
    typeof nota1 !== "number" ||
    typeof nota2 !== "number" ||
    typeof nota3 !== "number"
  ) {
    throw new Error("Os parâmetros devem ser números.");
  }

  const media = (nota1 + nota2 + nota3) / 3;

  const status = media >= 7.0 ? "Aprovado!" : "Reprovado!";

  return { media, status };
}
