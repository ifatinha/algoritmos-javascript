/**
 * @category Repetições
 * @function contabilizarVotos
 * @description
 * Simula a apuração de votos da urna eletrônica para quatro candidatos,
 * votos nulos e brancos.
 *
 * @param {number[]} votos - Lista de votos representados por códigos:
 * 1 = A, 2 = B, 3 = C, 4 = D, 5 = Nulo, 6 = Branco, 0 = Fim da votação
 *
 * @returns {{
 *  totalVotos: number,
 *  candidatoA: number,
 *  candidatoB: number,
 *  candidatoC: number,
 *  candidatoD: number,
 *  nulos: number,
 *  brancos: number,
 *  percA: number,
 *  percB: number,
 *  percC: number,
 *  percD: number,
 *  percNulos: number,
 *  percBrancos: number
 * }}
 *
 * @throws {Error} Caso algum voto seja inválido (fora do intervalo 0-6)
 *
 * @example
 * contabilizarVotos([1,2,5,0]);
 */

export function contabilizarVotos(votos) {
  if (!Array.isArray(votos) || votos.length === 0) {
    throw new Error(
      "A entrada deve ser um array de votos com ao menos 1 voto."
    );
  }

  let totalVotos = 0;

  const apuracao = {
    candidatoA: 0,
    candidatoB: 0,
    candidatoC: 0,
    candidatoD: 0,
    nulos: 0,
    brancos: 0,
  };

  for (let voto of votos) {
    if (
      typeof voto !== "number" ||
      voto < 1 ||
      voto > 6 ||
      isNaN(voto) ||
      !Number.isInteger(voto)
    ) {
      throw new Error("Voto inválido detectado.");
    }

    if (voto === 0) break;

    switch (voto) {
      case 1:
        apuracao.candidatoA++;
        break;

      case 2:
        apuracao.candidatoB++;
        break;

      case 3:
        apuracao.candidatoC++;
        break;

      case 4:
        apuracao.candidatoD++;
        break;

      case 5:
        apuracao.nulos++;
        break;

      case 6:
        apuracao.brancos++;
        break;
    }

    totalVotos++;
  }

  return {
    apuracao: apuracao,
    totalVotos: totalVotos,
  };
}