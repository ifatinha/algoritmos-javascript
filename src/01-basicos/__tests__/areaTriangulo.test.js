import { calcularAreaTriangulo } from "../areaTriangulo.js";

describe("Função calcularAreaTriangulo", () => {
  test("deve calcular a area do triângulo corretamente", () => {
    expect(calcularAreaTriangulo(10, 5)).toBe(25);
    expect(calcularAreaTriangulo(20, 2)).toBe(20);
  });

  test("deve lançar um erro se a base não for um número", () => {
    expect(() => calcularAreaTriangulo("10", 5)).toThrow(
      "O valor da base deve ser um número válido."
    );
  });

  test("deve lançar um erro se a altura não for um número", () => {
    expect(() => calcularAreaTriangulo(10, "5")).toThrow(
      "O valor da altura deve ser um número válido."
    );
  });
});
