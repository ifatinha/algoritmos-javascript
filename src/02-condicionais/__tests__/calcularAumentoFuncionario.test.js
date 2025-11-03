import { calcularAumentoFuncionario } from "../calcularAumentoFuncionario.js";

describe("Função calcularAumentoFuncionario", () => {
  test("deve calcular o aumento corretamente para todos os cargos", () => {
    const casos = [
      {
        codigo: 1,
        salario: 1000,
        esperado: { cargo: "Escrituário", aumento: 500, novoSalario: 1500 },
      },
      {
        codigo: 2,
        salario: 2000,
        esperado: { cargo: "Secretário", aumento: 700, novoSalario: 2700 },
      },
      {
        codigo: 3,
        salario: 1500,
        esperado: { cargo: "Caixa", aumento: 300, novoSalario: 1800 },
      },
      {
        codigo: 4,
        salario: 5000,
        esperado: { cargo: "Gerente", aumento: 500, novoSalario: 5500 },
      },
      {
        codigo: 5,
        salario: 10000,
        esperado: { cargo: "Diretor", aumento: 0, novoSalario: 10000 },
      },
    ];

    casos.forEach(({ codigo, salario, esperado }) => {
      expect(calcularAumentoFuncionario(codigo, salario)).toEqual(esperado);
    });
  });

  test("deve lançar erro para códigos inválidos", () => {
    const codigosInvalidos = [0, 6, -1, "a", null, undefined, NaN];

    codigosInvalidos.forEach((codigo) => {
      expect(() => calcularAumentoFuncionario(codigo, 1000)).toThrow(
        "Código inválido. Deve ser um número entre 1 e 5."
      );
    });
  });

  test("deve lançar erro para salários inválidos", () => {
    const salariosInvalidos = [-1000, "a", null, undefined, NaN];

    salariosInvalidos.forEach((salario) => {
      expect(() => calcularAumentoFuncionario(1, salario)).toThrow(
        "Salário inválido. Deve ser um número positivo."
      );
    });
  });
});
