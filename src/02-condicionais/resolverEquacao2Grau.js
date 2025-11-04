/**
 * Resolve uma equação do 2º grau do tipo ax² + bx + c = 0.
 *
 * @category Condicionais
 * @function resolverEquacao2Grau
 * @param {number} a - Coeficiente de x² (não pode ser zero)
 * @param {number} b - Coeficiente de x
 * @param {number} c - Termo independente
 * @returns {{delta: number, raizes: number[]}} Objeto contendo o delta e as raízes reais (se existirem)
 *
 * @throws {Error} Se 'a' for zero ou parâmetros forem inválidos
 *
 * @example
 * const resultado = resolverEquacao2Grau(1, -3, 2);
 * console.log(resultado); // { delta: 1, raizes: [2, 1] }
 */

export function resolverEquacao2Grau(a, b, c) {
  if ([a, b, c].some((v) => typeof v !== "number" || isNaN(v))) {
    throw new Error("Os valores de a, b e c devem ser números.");
  }

  if (a === 0) {
    throw new Error(
      "O valor de 'a' deve ser diferente de zero para ser uma equação do segundo grau."
    );
  }

  const delta = Math.pow(b, 2) - 4 * a * c;

  if (delta > 0) {
    const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

    return {
      delta,
      raizes: [Number(raiz1.toFixed(2)), Number(raiz2.toFixed(2))],
    };
  } else if (delta === 0) {
    const raiz = -b / (2 * a);
    return { delta, raizes: [Number(raiz.toFixed(2))] };
  }

  return { delta, raizes: [] };
}
