import { calcularProduto } from "../calcularProduto.js";

describe("Função calcularProduto", () => {
  test("deve calcular corretamente produto código 1 e país 1", () => {
    const result = calcularProduto(1, 2, 1);
    expect(result).toEqual({
      pesoGramas: 2000,
      precoProduto: 20000,
      valorImposto: 0,
      valorTotal: 20000,
    });
  });

  test("deve calcular com imposto de 15% (país 2)", () => {
    const result = calcularProduto(6, 1, 2);
    expect(result).toEqual({
      pesoGramas: 1000,
      precoProduto: 25000,
      valorImposto: 3750,
      valorTotal: 28750,
    });
  });

  test("deve calcular com imposto de 25% (país 3)", () => {
    const result = calcularProduto(10, 1, 3);
    expect(result).toEqual({
      pesoGramas: 1000,
      precoProduto: 35000,
      valorImposto: 8750,
      valorTotal: 43750,
    });
  });

  test("deve lançar erro para código do produto inválido.", () => {
    expect(() => calcularProduto(12, 1, 1)).toThrow(
      "Código do produto inválido."
    );
  });

  test("deve lançar erro para código do país inválido.", () => {
    expect(() => calcularProduto(8, 1, 5)).toThrow("Código do país inválido.");
  });

  test("deve lançar erro para parâmetros inválidos.", () => {
    expect(() => calcularProduto("8", NaN, 5)).toThrow(
      "Todo os parâmetros devem ser números válidos."
    );
  });
});
