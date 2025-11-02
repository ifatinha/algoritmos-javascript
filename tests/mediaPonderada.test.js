import { mediaPonderada } from "../src/01-basicos/mediaPonderada.js";

describe("Função mediaPonderada", () => {
  test("deve calcular corretamente a média ponderada", () => {
    expect(mediaPonderada(8, 2, 7, 3)).toBeCloseTo(7.4, 1);
    expect(mediaPonderada(9, 1, 6, 2, 8, 3)).toBeCloseTo(7.5, 2);
    expect(mediaPonderada(10, 4, 5, 1)).toBeCloseTo(9.0, 1);
  });

  test("deve calcular corretamente a média ponderada com pesos iguais", () => {
    expect(mediaPonderada(10, 1, 5, 1, 8, 1)).toBeCloseTo(7.67, 2);
    expect(mediaPonderada(10, 1, 5, 1)).toBe(7.5);
  });

  test("deve lançar erro se houver número impar de argumentos", () => {
    expect(() => mediaPonderada(10, 2, 5)).toThrow(
      "Número inválido de argumentos. Deve haver pares de notas e pesos."
    );
  });

  test("deve lançar erro se algum valor não for numérico", () => {
    expect(() => mediaPonderada(10, "a", 5, 2)).toThrow(
      "Todos os valores devem ser numéricos."
    );
  });

  test("deve lançar erro se a soma dos pesos for zero", () => {
    expect(() => mediaPonderada(10, 0, 5, 0)).toThrow(
      "A soma dos pesos não pode ser zero."
    );
  });
});
