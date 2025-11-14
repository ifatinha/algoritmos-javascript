/**
 * @category Strings
 * @function contarLetra
 * @description
 * Conta a quantidade de ocorrências de uma letra (ou substring) dentro de uma frase.
 * Por padrão a busca é case-insensitive (não diferencia maiúsculas/minúsculas).
 *
 * @param {string} frase Frase onde será feita a busca.
 * @param {string} letra Letra ou substring a ser pesquisada (pelo menos 1 caractere).
 * @param {Object} [options] Opções adicionais.
 * @param {boolean} [options.caseSensitive=false] Se true, a busca diferencia maiúsculas/minúsculas.
 *
 * @throws {Error} Caso `frase` ou `letra` não sejam strings válidas (vazias ou não-strings).
 *
 * @returns {number} Quantidade de ocorrências encontradas.
 *
 * @example
 * contarLetra("Banana", "a") // retorno: 3
 */

export function contarLetra(texto, letra, { caseSensitive = false } = {}) {
  if (typeof texto !== "string" || texto.trim().length === 0) {
    throw new Error("A entrada 'texto' deve ser uma string válida.");
  }

  if (typeof letra !== "string" || letra.trim().length === 0) {
    throw new Error("A entrada 'letra' deve ser uma string válida.");
  }

  const termoEscapado = letra.replace(/[.*+?${}()|[\]\\]/g, "\\$&");
  const flags = caseSensitive ? "g" : "gi";
  const regex = new RegExp(termoEscapado, flags);
  const matches = texto.match(regex);
  return matches ? matches.length : 0;
}
