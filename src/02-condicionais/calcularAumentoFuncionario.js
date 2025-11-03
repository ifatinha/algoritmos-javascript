/**
 * Calcula o novo salário de um funcionário com base em seu cargo e percentual de aumento.
 *
 * @category Condicionais
 * @function calcularAumentoFuncionario
 * @param {number} codigo - Código do cargo do funcionário (1 a 5).
 * @param {number} salario - Salário atual do funcionário.
 * @returns {{ cargo: string, aumento: number, novoSalario: number }}
 * Objeto contendo o nome do cargo, o valor do aumento e o novo salário.
 * @throws {Error} Se o código ou o salário forem inválidos.
 *
 * @example
 * // Retorna { cargo: "Caixa", aumento: 400, novoSalario: 2400 }
 * calcularAumentoFuncionario(3, 2000);
 *
 * @example
 * // Retorna { cargo: "Diretor", aumento: 0, novoSalario: 10000 }
 * calcularAumentoFuncionario(5, 10000);
 */

export function calcularAumentoFuncionario(codigo, salario) {
  if (typeof codigo !== "number" || isNaN(codigo) || codigo < 1 || codigo > 5) {
    throw new Error("Código inválido. Deve ser um número entre 1 e 5.");
  }

  if (typeof salario !== "number" || isNaN(salario) || salario < 0) {
    throw new Error("Salário inválido. Deve ser um número positivo.");
  }

  let aumento = 0.0;
  let cargo = "";
  let novoSalario = salario;

  switch (codigo) {
    case 1:
      aumento = (salario * 50) / 100;
      cargo = "Escrituário";
      break;
    case 2:
      aumento = (salario * 35) / 100;
      cargo = "Secretário";
      break;
    case 3:
      aumento = (salario * 20) / 100;
      cargo = "Caixa";
      break;
    case 4:
      cargo = "Gerente";
      aumento = (salario * 10) / 100;
      break;
    case 5:
      cargo = "Diretor";
      break;
    default:
      throw new Error("Cargo inválido");
  }

  novoSalario = salario + aumento;
  return {
    cargo,
    aumento,
    novoSalario,
  };
}
