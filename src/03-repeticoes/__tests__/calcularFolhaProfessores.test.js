import { calcularFolhaProfessores } from "../calcularFolhaProfessores.js";

describe("Função calcularFolhaProfessores", () => {
  const mockData = [
    { matricula: 1, sexo: "F", horas: 120 },
    { matricula: 2, sexo: "F", horas: 80 },
    { matricula: 3, sexo: "M", horas: 100 },
    { matricula: 4, sexo: "M", horas: 105 },
    { matricula: 5, sexo: "F", horas: 95 },
  ];

  test("deve calcular sálarios e média corretamente", () => {
    const resultado = calcularFolhaProfessores(mockData);
    expect(resultado.detalhes.length).toBe(5);

    // Professor mulher
    expect(resultado.detalhes[0]).toEqual({
      matricula: 1,
      sexo: "F",
      salarioBruto: 3600,
      salarioLiquido: 3420,
    });

    // Professor homem
    expect(resultado.detalhes[2]).toEqual({
      matricula: 3,
      sexo: "M",
      salarioBruto: 3000,
      salarioLiquido: 2700,
    });

    expect(resultado.mediaSalH).toBe(2767.5);
    expect(resultado.mediaSalM).toBe(2802.5);
  });

  test("deve lançar erros para dados inválidos", () => {
    expect(() => calcularFolhaProfessores([])).toThrow(
      "A lista de professores não pode ser vazia"
    );

    expect(() =>
      calcularFolhaProfessores([
        { matricula: -1, sexo: "F", horas: 120 },
      ]).toThrow("Dados de professor inválidos.")
    );

    expect(() =>
      calcularFolhaProfessores([
        { matricula: 1, sexo: "X", horas: 120 },
      ]).toThrow("Dados de professor inválidos.")
    );

    expect(() =>
      calcularFolhaProfessores([
        { matricula: 1, sexo: "F", horas: -120 },
      ]).toThrow("Dados de professor inválidos.")
    );
  });
});
