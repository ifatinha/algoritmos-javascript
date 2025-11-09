/**
 * @category Repetições
 * @function calcularSerie
 * @description
 * Calcula a soma de uma série matemática baseada em X e quantidade de termos.
 *
 * A sequência segue a lógica:
 * S = ±(X^(i+1) / fatorial(denominador)), alternando sinais e mudando o denominador
 * da seguinte maneira: 1 → 2 → 3 → 4 → 3 → 2 → 1 → ...
 *
 * @param {number} numTermos Quantidade de termos a serem somados
 * @param {number} x Valor base para exponenciação
 *
 * @throws {Error} Se os parâmetros forem inválidos
 *
 * @returns {number} Resultado da soma da série
 *
 * @example
 * calcularSerie(3, 2)
 * // Exemplo aproximado:
 * // 2³/1! - 2⁴/2! + 2⁵/3! = 8 - 8 + 10.66 ≈ 10.66
 * // retorna: 10.66
 */

export function calcularSerie(numTermos, x) {
  if (
    typeof numTermos !== "number" ||
    isNaN(numTermos) ||
    numTermos <= 0 ||
    !Number.isInteger(numTermos)
  ) {
    throw new Error(
      "O parâmetro deve ser um número inteiro válido maior que zero"
    );
  }

  if (typeof x !== "number" || isNaN(x) || x < 0 || !Number.isInteger(x)) {
    throw new Error("O valor de X deve ser um número inteiro.");
  }

  let soma = 0;
  let denominador = 1;
  let direcao = 1;

  const fatorial = (n) => {
    let res = 1;
    for (let i = 1; i <= n; i++) res *= i;
    return res;
  };

  for (let i = 1; i <= numTermos; i++) {
    const expoente = i + 1;
    let fat = fatorial(denominador);
    let termo = Math.pow(x, expoente) / fat;

    soma += expoente % 2 === 0 ? termo : -termo;

    denominador += direcao;

    if (denominador === 4) direcao = -1;
    if (denominador === 1) direcao = 1;
  }

  return Number(soma.toFixed(2));
}
