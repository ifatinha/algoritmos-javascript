/**
 * @category Repetições
 * @function calcularSalarioFuncionario
 * @description
 * Calcula o salário final de um funcionário conforme categoria, turno e horas trabalhadas.
 *
 * @param {object} dadosFuncionario - Dados do funcionário.
 * @param {number} dadosFuncionario.horasTrabalhadas - Total de horas trabalhadas no mês.
 * @param {"M"|"V"|"N"} dadosFuncionario.turno - M: Matutino | V: Vespertino | N: Noturno.
 * @param {"O"|"G"} dadosFuncionario.categoria - O: Operário | G: Gerente.
 * @param {number} [salarioMinimo=450] - Valor do salário mínimo base de cálculo.
 * @returns {object} Informações calculadas do salário.
 *
 * @example
 * calcularSalarioFuncionario({ horasTrabalhadas: 100, turno: "N", categoria: "G" });
 * // retorno:
 * // {
 * //   valorHora: 81,
 * //   salarioBruto: 8100,
 * //   auxilioAlimentacao: 405,
 * //   salarioFinal: 8505
 * // }
 *
 * @throws {Error} Quando os parâmetros forem inválidos.
 */

export function calcularSalarioFuncionario(
  dadosFuncionario,
  salarioMinimo = 450
) {
  if (
    typeof dadosFuncionario?.horasTrabalhadas !== "number" ||
    isNaN(dadosFuncionario?.horasTrabalhadas) ||
    dadosFuncionario?.horasTrabalhadas < 0
  ) {
    throw new Error("Horas trabalhadas devem ser um número válido e >= 0.");
  }

  if (!["M", "V", "N"].includes(dadosFuncionario?.turno)) {
    throw new Error("Turno inválido. Utilize M, V, N.");
  }

  if (!["O", "G"].includes(dadosFuncionario?.categoria)) {
    throw new Error("Categória inválida. Utilize O ou G.");
  }

  let percentual;

  if (dadosFuncionario.categoria === "G") {
    percentual = dadosFuncionario.turno === "N" ? 0.18 : 0.15;
  } else {
    percentual = dadosFuncionario.turno === "N" ? 0.13 : 0.1;
  }

  const valorHora = salarioMinimo * percentual;
  const salarioBruto = valorHora * dadosFuncionario.horasTrabalhadas;

  let auxilioAlimentacao =
    salarioBruto <= 300
      ? salarioBruto * 0.2
      : salarioBruto < 600
        ? salarioBruto * 0.15
        : salarioBruto * 0.05;

  const salarioFinal = salarioBruto + auxilioAlimentacao;

  return {
    valorHora: Number(valorHora.toFixed(2)),
    salarioBruto: Number(salarioBruto.toFixed(2)),
    auxilioAlimentacao: Number(auxilioAlimentacao.toFixed(2)),
    salarioFinal: Number(salarioFinal.toFixed(2)),
  };
}