import { calcularPotenciasERaizes } from "../src/01-basicos/calcularPotenciasERaizes.js";

describe("Função calcularPotenciasERaizes", () => {
  test("deve calcular as quadrado, cubo e raízes corretamente", () => {
    const resultado = calcularPotenciasERaizes(8);
    expect(resultado.quadrado).toBe(64);
    expect(resultado.cubo).toBe(512);
    expect(resultado.raizQuadrada).toBeCloseTo(2.828, 3);
    expect(resultado.raizCubica).toBe(2);
  });

  test("deve lançar erro se o valor não for número", () => {
    expect(() => calcularPotenciasERaizes("5")).toThrow(
      "O valor do raio deve ser um número válido."
    );
  });

  test("deve lançar erro se o valor for menor ou igual 0", () => {
    expect(() => calcularPotenciasERaizes(-2)).toThrow(
      "O número deve ser maior que 0."
    );
  });
});
