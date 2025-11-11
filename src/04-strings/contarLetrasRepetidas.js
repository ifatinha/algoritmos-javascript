/**
 * @category Strings
 * @function contarLetrasRepetidas
 * @description
 * Conta caracteres repetidos em um texto (por padrão é case-insensitive),
 * ignorando espaços. Retorna um array com os caracteres que aparecem mais de uma vez
 * e suas quantidades.
 *
 * @param {string} texto Texto a ser analisado.
 * @param {Object} [options] Opções de ajuste.
 * @param {boolean} [options.caseSensitive=false] Quando true, distingue maiúsculas/minúsculas.
 *
 * @throws {Error} Caso o parâmetro não seja uma string válida (vazia ou não-string).
 *
 * @returns {Array<{letra: string, quantidade: number}>} Lista de objetos com letra e quantidade (apenas onde quantidade > 1).
 *
 * @example
 * contarLetrasRepetidas("Banana")
 * // retorno: [{ letra: "a", quantidade: 3 }, { letra: "n", quantidade: 2 }]
 */

export function contarLetrasRepetidas(frase, { caseSensitive = true } = {}) {
  if (typeof frase !== "string" || frase.length === 0) {
    throw new Error("A entrada deve ser uma string válida");
  }

  const subject = caseSensitive ? frase : frase.toLowerCase();
  const counts = new Map();

  for (let char of subject) {
    if (char === " ") continue;
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  const repetidas = [];
  for (const [letra, quantidade] of counts) {
    if (quantidade > 1) {
      repetidas.push({ letra, quantidade });
    }
  }

  repetidas.sort((a, b) => {
    if (a.letra < b.letra) return -1;
    if (a.letra > b.letra) return 1;
  });

  return repetidas;
}
