import { contarPrimos } from "../contarPrimos.js";

describe("Função contarPrimos", () => {
  test("deve contar a quantidade de números primos corretamente", () => {
    expect(contarPrimos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(4);
    expect(contarPrimos([11, 12, 13, 14, 15, 16, 17, 18, 19, 23])).toBe(5);
  });

  test("deve lançar erro para lista vazia", () => {
    expect(() => contarPrimos([])).toThrow(
      "A lista deve conter ao menos um número."
    );
  });

  test("deve lançar erro para números inválidos", () => {
    expect(() => contarPrimos([1, "a", NaN])).toThrow(
      "Todos os elementos devem ser números inteiros válidos."
    );
    expect(() => contarPrimos([10, "a", NaN])).toThrow(
      "Todos os elementos devem ser números inteiros válidos."
    );

    expect(() => contarPrimos([1, 2, 3.5])).toThrow(
      "Todos os elementos devem ser números inteiros válidos."
    );
  });
});
