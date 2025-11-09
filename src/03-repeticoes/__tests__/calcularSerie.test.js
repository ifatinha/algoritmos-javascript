import { calcularSerie } from "../calcularSerie.js";

describe("Função calcularSerie", () => {
  test("deve calcular corretamente para 3 termos e X = 2", () => {
    expect(calcularSerie(3, 2)).toBeCloseTo(2.67, 2);
    expect(calcularSerie(4, 2)).toBeCloseTo(1.33, 2);
    expect(calcularSerie(5, 2)).toBeCloseTo(12, 2);
    expect(calcularSerie(1, 3)).toBeCloseTo(9, 2);
  });

  test("deve lançar erro para número de termos inválido", () => {
    expect(() => calcularSerie(-10, 2)).toThrow(
      "O parâmetro deve ser um número inteiro válido maior que zero"
    );
    expect(() => calcularSerie("A", 2)).toThrow(
      "O parâmetro deve ser um número inteiro válido maior que zero"
    );
  });

  test("deve lançar erro para X inválido", () => {
    expect(() => calcularSerie(4, "x")).toThrow(
      "O valor de X deve ser um número inteiro."
    );
  });
});
