import { celsiusParaFahrenheit } from "../celsiusParaFahrenheit.js";

describe("Função celsiusParaFahrenheit", () => {
  test("deve converter corretamente Celsius para Fahrenheit", () => {
    expect(celsiusParaFahrenheit(0)).toBe(32);
    expect(celsiusParaFahrenheit(100)).toBe(212);
    expect(celsiusParaFahrenheit(37)).toBeCloseTo(98.6, 1);
  });

  test("deve lançar erro se o valor não for numérico", () => {
    expect(() => celsiusParaFahrenheit("a")).toThrow(
      "O valor deve ser numérico."
    );
    expect(() => celsiusParaFahrenheit(NaN)).toThrow(
      "O valor deve ser numérico."
    );
  });

  test("deve lançar erro se a temperatura for menor que -273.15°C", () => {
    expect(() => celsiusParaFahrenheit(-300)).toThrow(
      "A temperatura não pode ser menor que -273.15°C."
    );
    expect(() => celsiusParaFahrenheit(-275)).toThrow(
      "A temperatura não pode ser menor que -273.15°C."
    );
  });
});
