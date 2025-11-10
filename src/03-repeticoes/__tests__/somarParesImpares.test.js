import { somarParesImpares } from "../somarParesImpares.js";

describe("Função somarParesImpares", () => {
  test("deve retornar corretamente a soma dos pares e impares", () => {
    const resultado = somarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(resultado).toEqual({
      somaPares: 30,
      somaImpares: 25,
    });
  });

  test("deve lançar erro para lista vazia", () => {
    expect(() => somarParesImpares([])).toThrow(
      "A lista deve conter ao menos um número"
    );
  });

  test("deve lançar erro para números inválidos", () => {
    expect(() => somarParesImpares(["1", "a", 3.45])).toThrow(
      "Todos os elementos devem ser números inteiros válidos."
    );
  });
});
