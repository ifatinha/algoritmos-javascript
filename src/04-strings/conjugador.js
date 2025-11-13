/**
 * @category Strings
 * @function conjugarPresenteIndicativo
 * @description
 * Conjuga um verbo regular no presente do indicativo (português) para as pessoas:
 * ["Eu", "Tu", "Ele(a)", "Nós", "Vós", "Eles(as)"].
 *
 * Aceita verbos terminados em -ar, -er ou -ir (regulares). Remove espaços extras
 * e não diferencia maiúsculas/minúsculas no sufixo. Retorna um array de strings,
 * cada item com o formato "<Pessoa> <verbo-conjugado>".
 *
 * @param {string} verbo Verbo no infinitivo (ex: "amar", "comer", "partir").
 *
 * @throws {Error} Caso `verbo` não seja uma string válida ou não termine em -ar/-er/-ir.
 *
 * @returns {string[]} Array com as 6 linhas de conjugação no presente do indicativo.
 *
 * @example
 * conjugarPresenteIndicativo("amar");
 * // retorno:
 * // [
 * //   "Eu amo",
 * //   "Tu amas",
 * //   "Ele(a) ama",
 * //   "Nós amamos",
 * //   "Vós amais",
 * //   "Eles(as) amam"
 * // ]
 */

export function conjugarVerboPresenteIndicativo(verbo) {
  if (typeof verbo !== "string" || verbo.trim().length === 0) {
    throw new Error("A entrada deve ser uma string válida.");
  }

  const verboTrim = verbo.trim().toLowerCase();

  if (verboTrim < 3) {
    throw new Error("Verbo muito curto para conjugação");
  }

  const terminacao = verboTrim.slice(-2).toLowerCase();
  const radical = verboTrim.slice(0, -2).toLowerCase();
  const pessoas = ["Eu", "Tu", "Ele(a)", "Nós", "Vós", "Eles(as)"];
  const sufixoPorTipo = {
    ar: ["o", "as", "a", "amos", "ais", "am"],
    er: ["o", "es", "e", "emos", "eis", "em"],
    ir: ["o", "es", "e", "imos", "is", "em"],
  };

  if (!Object.prototype.hasOwnProperty.call(sufixoPorTipo, terminacao)) {
    throw new Error("Verbo deve terminar em -ar, -er, -ir (regulares)");
  }

  const sufixes = sufixoPorTipo[terminacao];

  return pessoas.map((pessoa, idx) => `${pessoa} ${radical}${sufixes[idx]}`);
}

// console.log(conjugarVerboPresenteIndicativo("amar"));
// console.log(conjugarVerboPresenteIndicativo("vender"));
// console.log(conjugarVerboPresenteIndicativo("partir"));
// console.log(conjugarVerboPresenteIndicativo("  AmAR   "));
