import { areaLosango } from "../src/01-basicos/areaLosango.js";

describe("Função areaLosango", () => {
  test("deve calcular corretamente a área do losango", () => {
    expect(areaLosango(10, 6)).toBe(30);
    expect(areaLosango(15, 8)).toBe(60);
  });

  test("deve lidar com valores decimais", () => {
    expect(areaLosango(7.5, 4.2)).toBeCloseTo(15.75, 2);
    expect(areaLosango(9.1, 5.3)).toBeCloseTo(24.115, 3);
  });

  test("deve lançar erro se algum valor não for numérico", () => {
    expect(() => areaLosango(10, "a")).toThrow(
      "Todos os valores devem ser numéricos."
    );

    expect(() => areaLosango(10, NaN)).toThrow(
      "Todos os valores devem ser numéricos."
    );
  });

  test("deve lançar erro se algum valor for menor ou igual a zero", () => {
    expect(() => areaLosango(0, 5)).toThrow(
      "Todos os valores devem ser maiores que zero."
    );

    expect(() => areaLosango(3, 0)).toThrow(
      "Todos os valores devem ser maiores que zero."
    );
  });
});
