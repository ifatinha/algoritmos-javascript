/** Capitulo 08 - sub-rotinas: Exemplo 07
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

//Função menu

function menu() {
  console.log("Menu de Opções");
  console.log("A - Média Aritmética");
  console.log("P - Média Ponderada");
  console.log("S - Sair");
}

//função que calcula a media aritmética
let mediaAritmetica = (n1, n2, n3) => (n1 + n2 + n3) / 3;

//função que calcula a media ponderada
let mediaPonderada = (n1, n2, n3) => (n1 * 5 + n2 * 3 + n3 * 2) / 10;

function calcularMedia(n1, n2, n3, letra) {
  let media = 0.0;

  if (letra.toLowerCase() === "a") {
    console.log("Calculando a Média Aritmética!");
    media = mediaAritmetica(n1, n2, n3);
  } else if (letra.toLowerCase() === "p") {
    console.log("Calculando a Média Ponderada!");
    media = mediaPonderada(n1, n2, n3);
  }

  return media;
}

let letra = "";

do {
  menu();
  letra = scanner.question("Opção: ");

  if (letra.toLowerCase() !== "s") {
    let nota1 = scanner.questionFloat("Nota 01: ");
    let nota2 = scanner.questionFloat("Nota 02: ");
    let nota3 = scanner.questionFloat("Nota 03: ");
    console.log(calcularMedia(nota1, nota2, nota3, letra).toFixed(2));
  } else {
    console.log("Encerrando aplicação!");
  }
} while (letra.toLowerCase() !== "s");
