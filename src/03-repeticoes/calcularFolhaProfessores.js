/**
 * @category Repetições
 * @function calcularFolhaProfessores
 * @description
 * Dado um conjunto de professores, seus sexos e suas cargas de aula,
 * calcula o salário líquido de cada um com base em:
 *
 * - Valor da hora: R$30,00
 * - Desconto de 10% para professores homens
 * - Desconto de 5% para professoras mulheres
 *
 * A função também retorna as médias salariais por sexo.
 *
 * @param {Array} professores Lista contendo os dados dos professores
 * @param {number} professores[].matricula Matrícula do professor (> 0)
 * @param {"M"|"F"} professores[].sexo Sexo do professor
 * @param {number} professores[].horas Quantidade de horas trabalhadas no mês (> 0)
 *
 * @throws {Error} Se algum dado estiver inválido
 *
 * @returns {object}
 * {
 *   detalhes: [
 *     { matricula, sexo, salarioBruto, salarioLiquido }
 *   ],
 *   mediaSalH: média salarial de homens ou null,
 *   mediaSalM: média salarial de mulheres ou null
 * }
 *
 * @example
 * calcularFolhaProfessores([
 *   { matricula: 1, sexo: "M", horas: 100 },
 *   { matricula: 2, sexo: "F", horas: 80 }
 * ]);
 */
export function calcularFolhaProfessores(professores) {
  if (!Array.isArray(professores) || professores.length === 0) {
    throw new Error("A lista de professores não pode ser vazia");
  }

  const VALOR_HORA = 30;
  let detalhes = [];
  let somaHomens = 0;
  let somaMulheres = 0;
  let qtdHomens = 0;
  let qtdMulheres = 0;

  professores.forEach((professor) => {
    if (
      typeof professor.matricula !== "number" ||
      isNaN(professor.matricula) ||
      professor.matricula < 0 ||
      typeof professor.horas !== "number" ||
      isNaN(professor.horas) ||
      professor.horas < 0
    ) {
      throw new Error("Dados de professor inválidos.");
    }

    if (professor.sexo !== "M" && professor.sexo !== "F") {
      throw new Error("Sexo inválido. Use 'M' ou 'F'");
    }

    const salarioBruto = professor.horas * VALOR_HORA;
    const desconto = professor.sexo === "M" ? 0.1 : 0.05;
    const salarioLiquido = salarioBruto - salarioBruto * desconto;

    detalhes.push({
      matricula: professor.matricula,
      sexo: professor.sexo,
      salarioBruto: Number(salarioBruto.toFixed(2)),
      salarioLiquido: Number(salarioLiquido.toFixed(2)),
    });

    if (professor.sexo === "M") {
      somaHomens += salarioLiquido;
      qtdHomens++;
    } else {
      somaMulheres += salarioLiquido;
      qtdMulheres++;
    }
  });

  return {
    detalhes,
    mediaSalH: qtdHomens ? Number((somaHomens / qtdHomens).toFixed(2)) : null,
    mediaSalM: qtdMulheres
      ? Number((somaMulheres / qtdMulheres).toFixed(2))
      : null,
  };
}