import { calcularRendimentos } from "../calcularRendimentos.js";

describe("Função calcularRendimentos", () => {
  test("deve calcular corretamente o investimento tipo A (3%)", () => {
    const resultado = calcularRendimentos(1000, "A");
    expect(resultado).toEqual({
      rendimentoMensal: 30,
      valorAtualizado: 1030,
    });
  });

  test("deve calcular corretamente o investimento tipo B (5%)", () => {
    const resultado = calcularRendimentos(2000, "B");
    expect(resultado).toEqual({
      rendimentoMensal: 100,
      valorAtualizado: 2100,
    });
  });

  test("deve lançar erro se o valor investido for inválido", () => {
    expect(() => calcularRendimentos("1000", "A")).toThrow(
      "O valor deve ser um número válido e maior que zero."
    );
  });

  test("deve lançar erro para tipo de investimento inválido", () => {
    expect(() => calcularRendimentos(1500, "X")).toThrow(
      "Tipo de investimento inválido. Use 'A' ou 'B'."
    );
  });
});
