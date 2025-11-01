import { calcularContaEnergia } from "../src/01-basicos/calcularContaEnergia.js";

describe("Função calcularContaEnergia", () => {
  test("deve calcular corretamente os valores da conta de energia", () => {
    const resultado = calcularContaEnergia(1300, 100);
    expect(resultado.valorKW).toBeCloseTo(260); // 1300 / 5
    expect(resultado.valorTotal).toBeCloseTo(26000); // 260 * 100
    expect(resultado.valorDesconto).toBeCloseTo(3900); // 15% de desconto
    expect(resultado.valorComDesconto).toBeCloseTo(22100); // 26000 - 3900
  });

  test("deve lançar erro se os parâmetros não forem números", () => {
    expect(() => calcularContaEnergia("1500", 20, 30)).toThrow(
      "Os parâmetros devem ser números válidos."
    );
  });

  test("deve lançar erro se algum valor for 0 ou negativo", () => {
    expect(() => calcularContaEnergia(-1500, 30, 15)).toThrow(
      "Os valores devem ser maiores que zero."
    );
  });
});
