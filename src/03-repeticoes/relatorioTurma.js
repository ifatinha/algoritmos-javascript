/**
 * @category Repetições
 * @function relatorioTurma
 * @description
 * Gera um relatório com estatísticas sobre alunos e suas notas.
 *
 * @param {Array} alunos - Lista de alunos com nome e notas.
 * @param {string} alunos[].nome - Nome do aluno.
 * @param {number} alunos[].notas.nota1 - Primeira nota.
 * @param {number} alunos[].notas.nota2 - Segunda nota.
 *
 * @returns {object} Estatísticas do desempenho da turma.
 *
 * @example
 * const alunos = [
 *  { nome: "Ana", notas: { nota1: 8, nota2: 7 } },
 *  { nome: "Pedro", notas: { nota1: 5, nota2: 6 } }
 * ];
 *
 * relatorioTurma(alunos);
 * // {
 * //   totalAprovados: 1,
 * //   totalExames: 1,
 * //   totalReprovados: 0,
 * //   mediaTurma: 6.50
 * // }
 *
 * @throws {Error} Se algum valor estiver inválido.
 */

export function relatorioTurma(alunos) {
  if (!Array.isArray(alunos) || alunos.length === 0) {
    throw new Error("O parâmetro deve conter pelo menos um registo.");
  }

  alunos.forEach((aluno) => {
    if (!aluno?.nome || typeof aluno?.nome !== "string") {
      throw new Error("O nome do aluno deve ser válido.");
    }

    const { nota1, nota2 } = aluno?.notas || {};

    if (
      typeof nota1 !== "number" ||
      typeof nota2 !== "number" ||
      nota1 < 0 ||
      nota2 < 0
    ) {
      throw new Error(
        "As notas devem ser números válidos maiores ou iguais que zero."
      );
    }
  });

  let somaMedias = 0;
  let totalAprovados = 0;
  let totalExames = 0;
  let totalReprovados = 0;

  alunos.forEach((aluno) => {
    const { nota1, nota2 } = aluno?.notas;

    let media = (nota1 + nota2) / 2;

    somaMedias += media;

    if (media >= 7) totalAprovados++;
    else if (media >= 3) totalExames++;
    else totalReprovados++;
  });

  const mediaTurma = somaMedias / alunos.length;

  return {
    totalAprovados,
    totalExames,
    totalReprovados,
    mediaTurma: Number(mediaTurma.toFixed(2)),
  };
}