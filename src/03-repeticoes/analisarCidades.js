/**
 * @category Repetições
 * @function analisarCidades
 * @description
 * Analisa dados de acidentes e veículos de 5 cidades,
 * indicando as cidades com maior e menor índice de acidentes,
 * além de calcular médias gerais.
 *
 * @param {Array} cidades Lista contendo objetos com: { nome, veiculos, acidentes }
 *
 * @throws {Error} Caso os dados sejam inválidos ou o array não contenha exatamente 5 cidades.
 *
 * @returns {Object} Estatísticas analisadas
 *
 * @example
 * analisarCidades([
 *   { nome: "A", veiculos: 3000, acidentes: 10 },
 *   { nome: "B", veiculos: 1000, acidentes: 3 },
 *   { nome: "C", veiculos: 5000, acidentes: 8 },
 *   { nome: "D", veiculos: 1500, acidentes: 1 },
 *   { nome: "E", veiculos: 2000, acidentes: 5 }
 * ])
 *
 * // retorno:
 * {
 *   cidadeMaiorIndice: { nome: "A", acidentes: 10 },
 *   cidadeMenorIndice: { nome: "D", acidentes: 1 },
 *   mediaVeiculos: 2500,
 *   mediaAcidentesMenos2000: 2
 * }
 */

export function analisarCidades(cidades) {
  if (!Array.isArray(cidades) || cidades.length !== 5) {
    throw new Error("É obrigatório informar 5 cidades.");
  }

  cidades.forEach((cidade, idx) => {
    if (
      !cidade ||
      typeof cidade.nome !== "string" ||
      typeof cidade.veiculos !== "number" ||
      typeof cidade.acidentes !== "number" ||
      cidade.veiculos < 0 ||
      cidade.acidentes < 0
    ) {
      throw new Error(`Dados inválidos para a cidade na posição ${idx + 1}`);
    }
  });

  let cidadeMaiorIndice = cidades[0];
  let cidadeMenorIndice = cidades[0];
  let totalVeiculos = 0;
  let totalAcidentesMenos2000 = 0;
  let countMenos2000 = 0;

  cidades.forEach((cidade) => {
    totalVeiculos += cidade.veiculos;

    if (cidade.acidentes > cidadeMaiorIndice.acidentes) {
      cidadeMaiorIndice = cidade;
    }

    if (cidade.acidentes < cidadeMenorIndice.acidentes) {
      cidadeMenorIndice = cidade;
    }

    if (cidade.veiculos < 2000) {
      totalAcidentesMenos2000 += cidade.acidentes;
      countMenos2000++;
    }
  });

  return {
    cidadeMaiorIndice: {
      nome: cidadeMaiorIndice.nome,
      acidentes: cidadeMaiorIndice.acidentes,
    },

    cidadeMenorIndice: {
      nome: cidadeMenorIndice.nome,
      acidentes: cidadeMenorIndice.acidentes,
    },

    mediaVeiculos: Number((totalVeiculos / cidades.length).toFixed(2)),

    mediaAcidentesMenos2000:
      countMenos2000 === 0
        ? 0
        : Number((totalAcidentesMenos2000 / countMenos2000).toFixed(2)),
  };
}
