import { resolverEquacao2Grau } from "../resolverEquacao2Grau.js";

describe("Função resolverEquacao2Grau", () => {
  test("deve retornar duas raizes reais quando delta > 0", () => {
    expect(resolverEquacao2Grau(1, -3, 2)).toEqual({
      delta: 1,
      raizes: [2, 1],
    });

    expect(resolverEquacao2Grau(1, -3, -54)).toEqual({
      delta: 225,
      raizes: [9, -6],
    });
  });

  test("deve retornar uma raiz real quando delta = 0", () => {
    expect(resolverEquacao2Grau(1, -2, 1)).toEqual({ delta: 0, raizes: [1] });
    expect(resolverEquacao2Grau(1, -6, 9)).toEqual({ delta: 0, raizes: [3] });
  });

  test("deve retornar delta negativo e sem raizes reais", () => {
    const resultado = resolverEquacao2Grau(2, 2, 5);
    expect(resultado.delta).toBeLessThan(0);
    expect(resultado.raizes).toEqual([]);
  });

  test("deve lançar erro se a = 0", () => {
    expect(() => resolverEquacao2Grau(0, -2, 3)).toThrow(
      "O valor de 'a' deve ser diferente de zero para ser uma equação do segundo grau."
    );
  });

  test("deve lancar erro se os parâmetros não forem números.", () => {
    expect(() => resolverEquacao2Grau("0", -2, 3)).toThrow(
      "Os valores de a, b e c devem ser números."
    );
    expect(() => resolverEquacao2Grau(2, NaN, 3)).toThrow(
      "Os valores de a, b e c devem ser números."
    );
    expect(() => resolverEquacao2Grau(1, -2, "3")).toThrow(
      "Os valores de a, b e c devem ser números."
    );
  });
});
