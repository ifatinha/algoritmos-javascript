/**
 * @category Array
 * @function contaPrimos
 * @description
 * Recebe um array de números inteiros e retorna um array contendo apenas
 * os números primos (em ordem de aparição, sem duplicatas).
 *
 * Regras:
 * - Entrada deve ser um array não vazio.
 * - Cada elemento do array deve ser um número inteiro (lança erro caso contrário).
 * - Números menores que 2 não são considerados primos e são ignorados.
 *
 * @param {number[]} numeros Array de números inteiros a serem verificados.
 *
 * @throws {Error} Caso `numeros` não seja um array não vazio.
 * @throws {Error} Caso algum elemento do array não seja um número inteiro.
 *
 * @returns {number[]} Array com os números primos encontrados (sem duplicatas).
 *
 * @example
 * contaPrimos([2, 3, 4, 5, 16, 17]) // retorno: [2, 3, 5, 17]
 */

const ehPrimo = (n) => {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const limite = Math.floor(Math.sqrt(n));

  for (let i = 3; i <= limite; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
};

export function contaPrimos(...numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error("A entrada deve ser um array válido e não vazio");
  }

  numeros.forEach((numero) => {
    if (
      typeof numero !== "number" ||
      !Number.isInteger(numero) ||
      isNaN(numero)
    ) {
      throw new Error("Os parâmetros devem ser números inteiros válidos");
    }
  });

  const vistos = new Set();
  const primos = [];

  for (const numero of numeros) {
    if (numero < 2) continue;
    if (vistos.has(numero)) continue;
    if (ehPrimo(numero)) {
      vistos.add(numero);
      primos.push(numero);
    }
  }

  const ordenados = [...primos].sort((a, b) => a - b);

  return ordenados;
}
