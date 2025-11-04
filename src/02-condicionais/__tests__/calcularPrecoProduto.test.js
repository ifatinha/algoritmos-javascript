import { calcularPrecoProduto } from "../calcularPrecoProduto.js";

describe("Função calcularPrecoProduto", () => {
  test("deve aplicar aumento de 10%", () => {
    expect(calcularPrecoProduto(25, 400)).toBe(27.5);
    expect(calcularPrecoProduto(15, 250)).toBe(16.5);
  });

  test("deve aplicar aumento de 15%", () => {
    expect(calcularPrecoProduto(35, 800)).toBe(40.25);
    expect(calcularPrecoProduto(75, 500)).toBe(86.25);
  });

  test("deve aplicar desconto de 20%", () => {
    expect(calcularPrecoProduto(110, 3000)).toBe(88);
    expect(calcularPrecoProduto(85, 1500)).toBe(68);
  });

  test("Não altera preços quando regras não se aplicam", () => {
    expect(calcularPrecoProduto(50, 300)).toBe(50);
  });

  test("deve lançar erro para preço inválido", () => {
    expect(() => calcularPrecoProduto(NaN, 1000)).toThrow(
      "Preço deve ser um número positivo válido."
    );

    expect(() => calcularPrecoProduto("20", 1250)).toThrow(
      "Preço deve ser um número positivo válido."
    );
  });

  test("deve lançar erro para venda mensal.", () => {
    expect(() => calcularPrecoProduto(35, NaN)).toThrow(
      "Venda mensal deve ser um número positivo válido."
    );

    expect(() => calcularPrecoProduto(55, "250")).toThrow(
      "Venda mensal deve ser um número positivo válido."
    );
  });
});
