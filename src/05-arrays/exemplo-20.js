/** Capitulo 06 - Vetores: Exemplo 20
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const numeros = [];

for (let i = 0; i < 5; i++) {
  numeros.push(Math.floor(Math.random() * 99 + 1));
}

let opcao;
console.log("Vetor Numeros: " + numeros.join());

do {
  console.log("1 - Mostrar Vetor Na Ordem Direta");
  console.log("2 - Mostrar Vetor Na Ordem Inversa");
  console.log("0 - Encerrar Aplicação");
  opcao = scanner.questionInt("Digite sua opcao: ");

  switch (opcao) {
    case 1:
      console.log("Ordem Direta: " + numeros.join(" - "));
      break;
    case 2:
      let txt = "";
      for (let i = 4; i >= 0; i--) {
        txt += numeros[i] + " - ";
      }
      console.log("Ordem Reversa: " + txt);
      break;
    case 0:
      console.log("Encerrando aplicação!");
      break;
    default:
      console.log("Opção inválida!");
      break;
  }
} while (opcao !== 0);
