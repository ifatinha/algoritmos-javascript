/**
 * @category Strings
 * @function pesquisarPalavra
 * @description
 * Conta quantas vezes uma palavra aparece em um texto, sem diferenciar maiúsculas e minúsculas por padrão.
 * Utiliza expressão regular global e case-insensitive para busca segura.
 *
 * @param {string} texto Texto onde será feita a pesquisa.
 * @param {string} palavra Palavra a ser pesquisada.
 * @param {Object} [options] Opções adicionais.
 * @param {boolean} [options.caseSensitive=false] Define se a busca deve ser sensível a maiúsculas/minúsculas.
 * @returns {number} Quantidade de ocorrências da palavra no texto.
 *
 * @throws {Error} Se `texto` ou `palavra` não forem strings válidas (não vazias).
 *
 * @example
 * pesquisarPalavra("A casa é bonita. A casa é azul.", "casa"); // 2
 * pesquisarPalavra("Banana BANANA banana", "banana", { caseSensitive: true }); // 1
 */

export function pesquisarPalavra(
  texto,
  palavra,
  { caseSensitive = false } = {}
) {
  if (
    typeof texto !== "string" ||
    texto.trim().length === 0 ||
    typeof palavra !== "string" ||
    palavra.trim().length === 0
  ) {
    throw new Error("A entrada deve ser strings válidas.");
  }

  // escapa caracteres especiais para evitar erro em regex
  const palavraEscapada = palavra.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const flags = caseSensitive ? "g" : "gi";
  const regex = new RegExp(palavraEscapada, flags);

  const correspondencia = texto.match(regex);

  return correspondencia ? correspondencia.length : 0;
}
