/** Capitulo 08 - sub-rotinas: Exercicio 20
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const salarios = [];
const filhos = [];

function lerDados() {
  let resposta;
  let contador = 1;
  do {
    console.log("Dados do participante " + contador);
    salarios.push(scanner.questionFloat("Salario: "));
    filhos.push(scanner.questionInt("Numero de filhos: "));

    resposta = scanner.question("Informar outro participante? ");
    contador++;
    console.clear();
  } while (resposta.toLowerCase() === "sim");
}

function somaSalarial(total, salario) {
  return total + salario;
}

function totalFilhos(total, qtd) {
  return total + qtd;
}

function maiorSalario(salarios) {
  let maior = salarios[0];

  for (let i = 1; i < salarios.length; i++) {
    if (maior < salarios[i]) {
      maior = salarios[i];
    }
  }

  return maior;
}

function percentualSalarial(salarios) {
  let qtd = 0;
  for (let i = 0; i < salarios.length; i++) {
    if (salarios[i] < 1200) {
      qtd++;
    }
  }

  let percentual = (100 * qtd) / salarios.length;

  return percentual;
}

lerDados();
let mediaSalarios = salarios.reduce(somaSalarial) / salarios.length;
console.log("Média Salarial da população: " + mediaSalarios.toFixed(2));

let mediaFilhos = filhos.reduce(totalFilhos) / filhos.length;
console.log("Média de Filhos da população: " + mediaFilhos.toFixed(2));

let maiorSal = maiorSalario(salarios);
console.log("Maior sálario: " + maiorSal.toFixed(2));

let percentual = percentualSalarial(salarios);
console.log(
  "Percentual de pessoas que recebem menos de R$1200.00 foi de " +
    percentual.toFixed(2) +
    "%"
);
