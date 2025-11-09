import { calcularSalarioFuncionario } from "../calcularSalarioFuncionario.js";

describe("Função calcularSalarioFuncionario", () => {
  test("deve calcular aumento de 18% para gerente no turno noturno", () => {
    const resultado = calcularSalarioFuncionario({
      horasTrabalhadas: 100,
      turno: "N",
      categoria: "G",
    });

    expect(resultado).toEqual({
      valorHora: 81,
      salarioBruto: 8100,
      auxilioAlimentacao: 405,
      salarioFinal: 8505,
    });
  });

  test("deve calcular aumento de 10% para operário no turno matutino", () => {
    const resultado = calcularSalarioFuncionario({
      horasTrabalhadas: 50,
      turno: "M",
      categoria: "O",
    });

    expect(resultado).toEqual({
      valorHora: 45,
      salarioBruto: 2250,
      auxilioAlimentacao: 112.5,
      salarioFinal: 2362.5,
    });
  });

  test("deve lançar erro ao informar categoria inválida", () => {
    expect(() =>
      calcularSalarioFuncionario({
        horasTrabalhadas: 50,
        turno: "M",
        categoria: "X",
      })
    ).toThrow("Categória inválida. Utilize O ou G.");
  });

  test("deve lançar erro ao informar turno inválido", () => {
    expect(() =>
      calcularSalarioFuncionario({
        horasTrabalhadas: 50,
        turno: "X",
        categoria: "G",
      })
    ).toThrow("Turno inválido. Utilize M, V, N.");
  });

  test("deve lançar erro ao informar horas trabalhadas inválidas", () => {
    expect(() =>
      calcularSalarioFuncionario({
        horasTrabalhadas: -50,
        turno: "V",
        categoria: "G",
      })
    ).toThrow("Horas trabalhadas devem ser um número válido e >= 0.");
  });
});
