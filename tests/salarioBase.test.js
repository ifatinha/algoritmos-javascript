import { calcularSalarioFinal } from "../src/01-basicos/salarioBase.js";

describe("Função calcularSalarioFinal", () => {
  test("deve calcular corretamente o sálario com gratificação e imposto", () => {
    const resultado = calcularSalarioFinal(1000);
    expect(resultado.gratificacao).toBeCloseTo(50);
    expect(resultado.imposto).toBeCloseTo(70);
    expect(resultado.novoSalario).toBeCloseTo(980);
  });

  test("deve lançar erro se o parâmetro não for número", () => {
    expect(() =>
      calcularSalarioFinal("1000").toThrow(
        "O parâmetro deve ser um número válido."
      )
    );
  });

  test("deve lançar erro se o parâmetro for NaN", () => {
    expect(() =>
      calcularSalarioFinal(NaN).toThrow(
        "O parâmetro deve ser um número válido."
      )
    );
  });
});
