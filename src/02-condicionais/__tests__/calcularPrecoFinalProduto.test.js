import { calcularPrecoFinalProduto } from "../calcularPrecoFinalProduto.js";

describe("Função calcularPrecoFinalProduto", () => {
  test("deve calcular corretamente um produto de alimentação não refrigerado", () => {
    const result = calcularPrecoFinalProduto(20, "A", "N");
    expect(result).toEqual({
      desconto: 0,
      valorFinal: 26,
      classificacao: "Barato",
      valorAdicional: 5,
      valorImposto: 1,
    });
  });

  test("deve calcular corretamente um porudo de alimentação refrigerado", () => {
    const result = calcularPrecoFinalProduto(100, "A", "S");
    expect(result).toEqual({
      desconto: 0,
      valorFinal: 116,
      classificacao: "Caro",
      valorAdicional: 8,
      valorImposto: 8,
    });
  });

  test("validar produto de limpeza não refrigerado com imposto diferente", () => {
    const result = calcularPrecoFinalProduto(9, "L", "N");
    expect(result).toEqual({
      desconto: 0.03,
      valorFinal: 10.92,
      classificacao: "Barato",
      valorAdicional: 1.5,
      valorImposto: 0.45,
    });
  });

  test("lançar erro ao receber preço inválido", () => {
    expect(() => calcularPrecoFinalProduto(NaN, "L", "N")).toThrow(
      "Preço deve ser um número válido e positivo."
    );
    expect(() => calcularPrecoFinalProduto(-20, "L", "N")).toThrow(
      "Preço deve ser um número válido e positivo."
    );
  });

  test("lançar erro ao receber tipo de produto inválido", () => {
    expect(() => calcularPrecoFinalProduto(25, "X", "N")).toThrow(
      "Tipo de produto inválido."
    );
  });

  test("lançar erro ao receber tipo de refrigeração inválido", () => {
    expect(() => calcularPrecoFinalProduto(25, "A", "X")).toThrow(
      "Valor de refrigeração inválido."
    );
  });
});
