/** Capitulo 08 - sub-rotinas: Exercicio 24
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const temperaturas = [];

function mesPorExtenso(mes) {
  const mesesExtenso = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return mesesExtenso[mes];
}

function lerDados() {
  for (let i = 0; i < 12; i++) {
    temperaturas.push(
      scanner.questionInt("Quantos graus fez em " + mesPorExtenso(i) + ": ")
    );
  }
}

function mostrarDados() {
  console.clear();
  for (let i = 0; i < temperaturas.length; i++) {
    console.log("Em " + mesPorExtenso(i) + " fez " + temperaturas[i] + "ºC");
  }
}

function maiorTemperatura(temperaturas) {
  let maior = temperaturas[0];
  let mes = 0;

  for (let i = 1; i < 12; i++) {
    if (maior < temperaturas[i]) {
      maior = temperaturas[i];
      mes = i;
    }
  }

  return (
    "O mês mais quente do ano foi " +
    mesPorExtenso(mes) +
    " com temperatura de " +
    maior +
    "ºC"
  );
}

function menorTemperatura(temperaturas) {
  let menor = temperaturas[0];
  let mes = 0;

  for (let i = 1; i < 12; i++) {
    if (menor > temperaturas[i]) {
      menor = temperaturas[i];
      mes = i;
    }
  }

  return (
    "O mês mais frio do ano foi " +
    mesPorExtenso(mes) +
    " com temperatura de " +
    menor +
    "ºC"
  );
}

lerDados();
mostrarDados();
console.log(maiorTemperatura(temperaturas));
console.log(menorTemperatura(temperaturas));
