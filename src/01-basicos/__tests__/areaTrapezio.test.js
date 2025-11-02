import { areaTrapezio } from "../areaTrapezio.js";

describe("Função areaTrapezio", () => {
  test("deve calcular corretamente a área do trapézio", () => {
    expect(areaTrapezio(5, 10, 6)).toBe(40);
    expect(areaTrapezio(7, 14, 8)).toBe(77);
    expect(areaTrapezio(3, 4, 2)).toBe(9);
  });

  test("deve lidar com valores decimais", () => {
    expect(areaTrapezio(5.5, 7.2, 4.3)).toBeCloseTo(31.62, 2);
    expect(areaTrapezio(6.1, 10.5, 5.5)).toBeCloseTo(48.8, 2);
  });

  test("deve lançar erro se algum valor não for numérico", () => {
    expect(() => areaTrapezio(5, "a", 6)).toThrow(
      "Todos os valores devem ser numéricos."
    );

    expect(() => areaTrapezio("5", 8, 6)).toThrow(
      "Todos os valores devem ser numéricos."
    );
  });

  test("deve lançar erro se algum valor for menor ou igual a zero", () => {
    expect(() => areaTrapezio(0, 10, 6)).toThrow(
      "Todos os valores devem ser maiores que zero."
    );

    expect(() => areaTrapezio(10, 5, 0)).toThrow(
      "Todos os valores devem ser maiores que zero."
    );
  });
});
