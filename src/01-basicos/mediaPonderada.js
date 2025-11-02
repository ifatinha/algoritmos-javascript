/**
 * 💡 Calcula a média ponderada de um conjunto de notas com seus respectivos pesos.
 *
 * @category Básicos
 * @param {...number} notasPesos - Lista de pares (nota, peso), por exemplo: `mediaPonderada(8, 2, 7, 3)`.
 * @returns {number} Média ponderada das notas.
 *
 * @throws {Error} Se o número de argumentos for ímpar ou se algum valor não for numérico.
 *
 * @example
 * mediaPonderada(8, 2, 7, 3);
 * // 7.4
 */

export function mediaPonderada(...notasPesos) {
  if (notasPesos.length % 2 !== 0) {
    throw new Error(
      "Número inválido de argumentos. Deve haver pares de notas e pesos."
    );
  }

  let somaPonderada = 0;
  let somaPesos = 0;

  for (let i = 0; i < notasPesos.length; i += 2) {
    const nota = notasPesos[i];
    const peso = notasPesos[i + 1];

    if (
      [nota, peso].some((value) => typeof value !== "number" || isNaN(value))
    ) {
      throw new Error("Todos os valores devem ser numéricos.");
    }

    somaPonderada += nota * peso;
    somaPesos += peso;

    if (somaPesos === 0) {
      throw new Error("A soma dos pesos não pode ser zero.");
    }
  }

  return somaPonderada / somaPesos;
}
