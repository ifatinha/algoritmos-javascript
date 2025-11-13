/**
 * @category Strings
 * @function verificaPalindromo
 * @description
 * Verifica se uma palavra ou frase é um palíndromo, desconsiderando
 * espaços, pontuação e diferenças entre maiúsculas e minúsculas.
 *
 * @param {string} palavra Palavra ou frase a ser verificada.
 *
 * @throws {Error} Se a entrada não for uma string válida (não vazia).
 *
 * @returns {boolean} `true` se for um palíndromo, `false` caso contrário.
 *
 * @example
 * verificaPalindromo("arara"); // true
 * verificaPalindromo("Ame a ema"); // true
 * verificaPalindromo("banana"); // false
 */

export function verificaPalindromo(palavra) {
  if (typeof palavra !== "string" || palavra.trim().length === 0) {
    throw new Error("A entrada deve ser uma string válida");
  }

  const textoLimpo = String(palavra)
    .normalize("NFD") // decompõe acentos
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "") // remove marcas combinantes
    .toLowerCase();

  const inverso = textoLimpo.split("").reverse().join("").toLowerCase();

  return inverso === textoLimpo;
}
