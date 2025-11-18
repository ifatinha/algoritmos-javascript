/** Capitulo 06 - Vetores: Exercicios Propostos 18
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

export function analisaArrayNumerico(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error("O parâmetro deve ser uma lista não vazia");
  }

  numeros.forEach((numero) => {
    if (typeof numero !== "number" || Number.isNaN(numero)) {
      throw new Error("Os elementos da lista devem ser números válidos");
    }
  });

  const maiorNumero = Math.max(numeros);
  const idxMaiorNumero = numeros.findIndex((numero) => numero === maiorNumero);
  const menorNumero = Math.min(numeros);
  const idxMenorNumero = numeros.findIndex((numero) => numero === menorNumero);

  return {
    maiorNumero: maiorNumero,
    idxMaiorNumero: idxMaiorNumero,
    menorNumero: menorNumero,
    idxMenorNumero: idxMenorNumero,
  };
}

console.log(analisaArrayNumerico([-9, 2, 8, -10, 6, 45, 1, 0, -66]));
