import { calcularPrecoVenda } from "../calcularPrecoVenda.js";

describe("Função calcularPrecoVenda", () => {
  test("deve calcular corretamente para preço <= 15000", () => {
    const resultado = calcularPrecoVenda(10000);
    expect(resultado).toEqual({
      precoFabrica: 10000,
      valorDistribuidor: 500,
      valorImpostos: 0,
      precoVenda: 10500,
      classificacao: "A",
    });
  });

  test("deve calcular corretamente para preço < 30000", () => {
    const resultado = calcularPrecoVenda(25000);
    expect(resultado).toEqual({
      precoFabrica: 25000,
      valorDistribuidor: 2500,
      valorImpostos: 3750,
      precoVenda: 31250,
      classificacao: "C",
    });
  });

  test("deve calcular corretamente para preço > 30000", () => {
    const resultado = calcularPrecoVenda(50000);
    expect(resultado).toEqual({
      precoFabrica: 50000,
      valorDistribuidor: 7500,
      valorImpostos: 10000,
      precoVenda: 67500,
      classificacao: "C",
    });
  });

  test("deve lançar erro para preço inválido", () => {
    expect(() => calcularPrecoVenda(-12000)).toThrow(
      "O preço de fábrica deve ser um valor válido."
    );

    expect(() => calcularPrecoVenda("12000")).toThrow(
      "O preço de fábrica deve ser um valor válido."
    );

    expect(() => calcularPrecoVenda(NaN)).toThrow(
      "O preço de fábrica deve ser um valor válido."
    );
  });
});
