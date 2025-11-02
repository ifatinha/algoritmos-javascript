import { calcularIdade } from "../calcularIdade.js";

describe("Função calcularIdade", () => {
  test("deve calcular a idade atual e a idade em 2050 corretamente", () => {
    const mockAnoAtual = 2025;
    const mockAnoNascimento = 1994;
    const RealDate = Date;
    global.Date = class extends RealDate {
      constructor() {
        super();
        return new RealDate(`${mockAnoAtual}-01-01T00:00:02`);
      }
    };

    const resultado = calcularIdade(mockAnoNascimento);
    expect(resultado.idade).toBe(31);
    expect(resultado.idadeFutura).toBe(56);

    global.Date = RealDate;
  });

  test("deve lançar erro se o valor não for número", () => {
    expect(() => calcularIdade("2025")).toThrow(
      "O valor deve ser um número válido."
    );
  });
});
