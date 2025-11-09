import { gerarFibonacci } from "../gerarFibonacci.js";

describe("Função gerarFibonacci", () => {
  test("deve gerar corretamente os 5 primeiros termos", () => {
    const result = gerarFibonacci(5);
    expect(result).toEqual([0, 1, 1, 2, 3]);
  });

  test("deve gerar apenas [0] quando qtdElementos for 1", () => {
    expect(gerarFibonacci(1)).toEqual([0]);
  });

  test("deve retornar um array vazio quando qtdElementos for 0", () => {
    expect(gerarFibonacci(0)).toEqual([]);
  });

  test("deve gerar erro para parâmetros inválidos", () => {
    expect(() => gerarFibonacci("d")).toThrow(
      "O parâmetro deve ser um número inteiro maior que zero"
    );

    expect(() => gerarFibonacci(-5)).toThrow(
      "O parâmetro deve ser um número inteiro maior que zero"
    );
  });
});
