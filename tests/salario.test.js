import { calcularSalario } from "../src/01-basicos/salario.js";

describe("Função calcularSalario", () => {
  test("deve lançar erro se o parâmetro não for número", () => {
    expect(() => calcularSalario("500")).toThrow(
      "Os parâmetros devem ser números."
    );
  });

  test("deve calcular aumento de 20% para sálarios acima de 500", () => {
    const resultado = calcularSalario(400);
    expect(resultado.aumento).toBe(80);
    expect(resultado.novoSalario).toBe(480);
  });

  test("deve calcular aumento de 10% para sálarios acima de 500", () => {
    const resultado = calcularSalario(1000);
    expect(resultado.aumento).toBe(100);
    expect(resultado.novoSalario).toBe(1100);
  });
});
