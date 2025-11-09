/**
 * @category Repetições
 * @function gerarFibonacci
 *
 * @description
 * Gera uma sequência de Fibonacci com a quantidade de elementos informada.
 *
 * @param {number} qtdElementos - Quantos termos devem ser gerados.
 * @returns {number[]} - Array contendo a sequência gerada.
 *
 * @example
 * gerarFibonacci(5); // retorno: [0, 1, 1, 2, 3]
 *
 * @throws {Error} Quando qtdElementos não é um número válido ou é negativo.
 */

export function gerarFibonacci(qtdElementos) {
  if (
    typeof qtdElementos !== "number" ||
    isNaN(qtdElementos) ||
    qtdElementos < 0
  ) {
    throw new Error("O parâmetro deve ser um número inteiro maior que zero");
  }

  if (qtdElementos === 0) return [];
  if (qtdElementos === 1) return [0];

  let anterior = 0;
  let posterior = 1;
  let corrente;
  let sequencia = [anterior, posterior];

  for (let i = 2; i < qtdElementos; i++) {
    corrente = anterior + posterior;
    sequencia.push(corrente);
    anterior = posterior;
    posterior = corrente;
  }

  return sequencia;
}
