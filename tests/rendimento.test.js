import { calcularRendimentos } from "../src/01-basicos/rendimento.js";

describe("Função calcularRendimentos", () => {
  test("calcular o rendimento e o saldo final", () => {
    const resultado = calcularRendimentos(1000, 10);
    expect(resultado.rendimento).toBe(100);
    expect(resultado.saldoFinal).toBe(1100);
  });

  test("lança erro se o valor do depósito não for número", () => {
    expect(() => calcularRendimentos("1000", 10)).toThrow(
      "O valor do depósito deve ser um número válido."
    );
  });

  test("lança erro se o valor da taxa não for número", () => {
    expect(() => calcularRendimentos(1000, "10")).toThrow(
      "A taxa de juros deve ser um número válido."
    );
  });
});
