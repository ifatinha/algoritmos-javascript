/**
 * Converte uma temperatura em Celsius para Fahrenheit.
 *
 * Fórmula: `F = (C × 1.8) + 32`
 *
 * @param {number} celsius - Temperatura em graus Celsius.
 * @returns {number} Temperatura convertida em Fahrenheit.
 * @throws {Error} Se o valor informado não for numérico ou menor que -273.15°C.
 *
 * @example
 * celsiusParaFahrenheit(0);   // Retorna 32
 * celsiusParaFahrenheit(25);  // Retorna 77
 */

export function celsiusParaFahrenheit(celsius) {
  if (typeof celsius !== "number" || isNaN(celsius)) {
    throw new Error("O valor deve ser numérico.");
  }

  if (celsius < -273.15) {
    throw new Error("A temperatura não pode ser menor que -273.15°C.");
  }

  return celsius * 1.8 + 32;
}
