import { calcularAreaCirculo } from "../areaCirculo";

describe("Função calcularAreaCirculo", () => {
  test("deve calcular a área do círculo corretamente", () => {
    expect(calcularAreaCirculo(4)).toBeCloseTo(Math.PI * 16);
    expect(calcularAreaCirculo(5)).toBeCloseTo(Math.PI * 25);
  });

  test("deve lançar um erro se o raio não for um número", () => {
    expect(() => calcularAreaCirculo("4")).toThrow(
      "O valor do raio deve ser um número válido."
    );
  });

  test("deve lançar um erro se o raio for NaN", () => {
    expect(() => calcularAreaCirculo(NaN)).toThrow(
      "O valor do raio deve ser um número válido."
    );
  });
});
