/** Capitulo 08 - sub-rotinas: Exemplo 08
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function horarioJogo(hInicial, mInicial, hFinal, mFinal) {
  let duracao = 0;

  if (hFinal < hInicial) {
    hFinal += 24;
  }

  if (mFinal < mInicial) {
    mFinal += 60;
    hFinal -= 1;
  }

  let totalHora = hFinal - hInicial;
  let totalMinuto = mFinal - mInicial;

  duracao = totalHora * 60 + totalMinuto;
  return duracao;
}

let hInicio = scanner.questionInt("Horario inicial: ");
let mInicio = scanner.questionInt("Minuto Inicial: ");

let hFinal = scanner.questionInt("Horario Final: ");
let mFinal = scanner.questionInt("Minuto Final: ");

console.log(
  "O jogo durou " + horarioJogo(hInicio, mInicio, hFinal, mFinal) + " minutos."
);
