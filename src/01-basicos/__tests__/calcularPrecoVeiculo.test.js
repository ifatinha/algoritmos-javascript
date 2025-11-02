import { calcularPrecoFinal } from "../calcularPrecoVeiculo.js";

describe("Função calcularPrecoFinal", () => {
  test("deve calcular corretamente o preço final, lucro e imposto", () => {
    const resultado = calcularPrecoFinal(10000, 20, 15);
    expect(resultado.lucroDistribuidor).toBe(2000);
    expect(resultado.imposto).toBe(1500);
    expect(resultado.precoFinal).toBe(13500);
  });

  test("deve lançar erro se algum parâmetro não for número", () => {
    expect(() => calcularPrecoFinal("10000", 20, 15)).toThrow(
      "Todos os parâmetros devem ser números."
    );
  });

  test("deve lançar erro se algum parâmetro for NaN", () => {
    expect(() => calcularPrecoFinal(NaN, 20, 15)).toThrow(
      "Todos os parâmetros devem ser números."
    );
  });
});
