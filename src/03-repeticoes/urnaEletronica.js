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
  if (!Array.isArray(votos)) {
    throw new Error("A entrada deve ser um array de votos.");
  }

  let candidatoA = 0;
  let candidatoB = 0;
  let candidatoC = 0;
  let candidatoD = 0;
  let nulos = 0;
  let brancos = 0;
  let totalVotos = 0;
}
import scanner from "readline-sync";

let candidatoA = 0;
let candidatoB = 0;
let candidatoC = 0;
let candidatoD = 0;
let nulos = 0;
let brancos = 0;
let voto;
let totalVotos = 0;
let contador = 0;

do {
  console.log("Urna Eletrônica! Para votar escolha uma das opções abaixo:");
  console.log("1 - Candidato A");
  console.log("2 - Candidato B");
  console.log("3 - Candidato C");
  console.log("4 - Candidado D");
  console.log("5 - Voto Nulo");
  console.log("6 - Branco");
  console.log("0 - Encerrar Votação");
  voto = scanner.questionInt("Seu Voto: ");
  //voto = Math.floor((Math.random() * 6) + 0);
  switch (voto) {
    case 1:
      console.log("Você votou no candidato A.");
      candidatoA++;
      totalVotos++;
      break;

    case 2:
      console.log("Você votou no candidato B.");
      candidatoB++;
      totalVotos++;
      break;

    case 3:
      console.log("Você votou no candidato C.");
      candidatoC++;
      totalVotos++;
      break;

    case 4:
      console.log("Você votou no candidato D.");
      candidatoD++;
      totalVotos++;
      break;

    case 5:
      console.log("Você votou Nulo.");
      nulos++;
      totalVotos++;
      break;

    case 6:
      console.log("Você votou Branco.");
      brancos++;
      totalVotos++;
      break;

    case 0:
      console.log("Encerrando Votação.");
      break;

    default:
      console.log("Opção Inválida. Tente novamente.");
      break;
  }
} while (voto !== 0);

console.clear();
let percA = (candidatoA * 100) / totalVotos;
let percB = (candidatoB * 100) / totalVotos;
let percC = (candidatoC * 100) / totalVotos;
let percD = (candidatoD * 100) / totalVotos;
let percNulos = (nulos * 100) / totalVotos;
let percBrancos = (brancos * 100) / totalVotos;

console.log("Total Votos".padEnd(50, ".") + ": " + totalVotos);
console.log(
  "Total Votos Candidato A".padEnd(50, ".") +
    ": " +
    candidatoA +
    " - " +
    percA.toFixed(2) +
    "% dos votos válidos."
);
console.log(
  "Total Votos Candidato B".padEnd(50, ".") +
    ": " +
    candidatoB +
    " - " +
    percB.toFixed(2) +
    "% dos votos válidos."
);
console.log(
  "Total Votos Candidato C".padEnd(50, ".") +
    ": " +
    candidatoC +
    " - " +
    percC.toFixed(2) +
    "% dos votos válidos."
);
console.log(
  "Total Votos Candidato D".padEnd(50, ".") +
    ": " +
    candidatoD +
    " - " +
    percD.toFixed(2) +
    "% dos votos válidos."
);
console.log(
  "Total Votos Brancos".padEnd(50, ".") +
    ": " +
    brancos +
    " - " +
    percBrancos.toFixed(2) +
    "% dos votos válidos."
);
console.log(
  "Total Votos Nulos".padEnd(50, ".") +
    ": " +
    nulos +
    " - " +
    percNulos.toFixed(2) +
    "% dos votos válidos."
);
