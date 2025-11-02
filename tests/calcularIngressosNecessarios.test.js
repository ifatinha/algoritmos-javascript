import { calcularIngressosNecessarios } from "../src/01-basicos/calcularIngressosNecessarios.js";

describe("Função calcularIngressosNecessarios", () => {
  test("deve calcular corretamente o número mínimo de ingressos necessários", () => {
    expect(calcularIngressosNecessarios(750, 30)).toBe(25);
    expect(calcularIngressosNecessarios(1000, 50)).toBe(20);
    expect(calcularIngressosNecessarios(5000, 100)).toBe(50);
  });

  test("deve arredondar para cima quando o valor não for exato", () => {
    expect(calcularIngressosNecessarios(100, 33)).toBe(4);
    expect(calcularIngressosNecessarios(1050, 50)).toBe(21);
    expect(calcularIngressosNecessarios(5000, 99)).toBe(51);
  });

  test("deve retornar 0 se o custo for 0", () => {
    expect(calcularIngressosNecessarios(0, 10)).toBe(0);
    expect(calcularIngressosNecessarios(0, 100)).toBe(0);
    expect(calcularIngressosNecessarios(0, 100)).toBe(0);
  });

  test("deve lançar erro para custo negativo", () => {
    expect(() => calcularIngressosNecessarios(-100, 50)).toThrow(
      "O custo deve ser um número válido maior ou igual a zero."
    );
  });

  test("deve lançar erro para preço inválido (menor ou igual a zero)", () => {
    expect(() => calcularIngressosNecessarios(1000, 0)).toThrow(
      "O preço deve ser um número válido maior que zero."
    );
  });
});
