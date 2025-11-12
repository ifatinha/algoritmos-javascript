/**
 * @category Strings
 * @function ordenarFrase
 * @description
 * Recebe um texto e retorna um array com as palavras ordenadas alfabeticamente.
 * Ignora espaços extras (vários espaços consecutivos) e não remove pontuação.
 *
 * @param {string} frase Frase a ser processada.
 * @param {Object} [options] Opções.
 * @param {boolean} [options.caseSensitive=false] Se true, a ordenação diferencia maiúsculas/minúsculas.
 *
 * @throws {Error} Caso o parâmetro não seja uma string válida (vazia ou não-string).
 *
 * @returns {string[]} Array com as palavras ordenadas.
 *
 * @example
 * ordenarFrase("banana maçã abacaxi") // retorno: ["abacaxi", "banana", "maçã"]
 */

export function ordenarFrase(frase, { caseSensitive = false } = {}) {
  if (typeof frase !== "string" || frase.trim().length === 0) {
    throw new Error("A entrada deve ser uma string válida");
  }

  const palavras = frase.trim().split(/\s+/);
  const palavrasParaOrdenar = [...palavras];

  if (caseSensitive) {
    palavrasParaOrdenar.sort((a, b) => a.localeCompare(b));
  } else {
    palavrasParaOrdenar.sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: "base" })
    );
  }

  return palavrasParaOrdenar.join(", ");
}
