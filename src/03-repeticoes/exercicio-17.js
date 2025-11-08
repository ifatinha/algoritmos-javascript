/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 17
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let numCanal;
let qtdCanal12 = 0;
let qtdCanal7 = 0;
let qtdCanal5 = 0;
let qtdCanal4 = 0;
let porcentagem = 0.0;
let qtdUsuarios = 0;

do {
  console.log("Bem-Vindo! Para encerrar aplicação digite canal 0.");
  console.log("Número do Canal");
  console.log("12 - Globo");
  console.log("7 - SBT");
  console.log("5 - Bandeirantes");
  console.log("4 - Record");
  numCanal = scanner.questionInt("Opção: ");

  if (numCanal !== 0) {
    while (
      numCanal !== 12 &&
      numCanal !== 7 &&
      numCanal !== 5 &&
      numCanal !== 4
    ) {
      console.log("Número do Canal");
      console.log("12 - Globo");
      console.log("7 - SBT");
      console.log("5 - Bandeirantes");
      console.log("4 - Record");
      numCanal = scanner.questionInt("Opção Inválida! Tente novamente: ");
    }

    let tvLigada = scanner.questionInt("A TV está ligada (1 - Sim; 2 - Não): ");

    while (tvLigada !== 1 && tvLigada !== 2) {
      tvLigada = scanner.questionInt(
        "Opção Inválida! A TV está ligada (1 - Sim; 2 - Não): "
      );
    }

    if (tvLigada === 1) {
      let numPessoas = scanner.questionInt(
        "Número de Pessoas que estavam assistindo: "
      );
      qtdUsuarios++;

      switch (numCanal) {
        case 12:
          qtdCanal12++;
          break;

        case 7:
          qtdCanal7++;
          break;

        case 5:
          qtdCanal5++;
          break;

        case 4:
          qtdCanal4++;
          break;
      }
    } else if (tvLigada === 2) {
      console.log("A TV estava desligada! Voto não computado.");
    }
  }
} while (numCanal !== 0);

console.clear();

if (qtdCanal12 === 0) {
  console.log("Nenhuma pessoa estava assistindo ao canal 12.");
} else {
  porcentagem = (qtdCanal12 * 100) / qtdUsuarios;
  console.log(
    "A quantidade de pessoas que estavam assistindo ao canal 12 foi de " +
      qtdCanal12 +
      " pessoas. O que equivale a " +
      porcentagem +
      "% de audiências."
  );
}

if (qtdCanal7 === 0) {
  console.log("Nenhuma pessoa estava assistindo ao canal 07.");
} else {
  porcentagem = (qtdCanal7 * 100) / qtdUsuarios;
  console.log(
    "A quantidade de pessoas que estavam assistindo ao canal 12 foi de " +
      qtdCanal7 +
      " pessoas. O que equivale a " +
      porcentagem +
      "% de audiências."
  );
}

if (qtdCanal5 === 0) {
  console.log("Nenhuma pessoa estava assistindo ao canal 05.");
} else {
  porcentagem = (qtdCanal5 * 100) / qtdUsuarios;
  console.log(
    "A quantidade de pessoas que estavam assistindo ao canal 12 foi de " +
      qtdCanal5 +
      " pessoas. O que equivale a " +
      porcentagem +
      "% de audiências."
  );
}

if (qtdCanal4 === 0) {
  console.log("Nenhuma pessoa estava assistindo ao canal 04.");
} else {
  porcentagem = (qtdCanal4 * 100) / qtdUsuarios;
  console.log(
    "A quantidade de pessoas que estavam assistindo ao canal 12 foi de " +
      qtdCanal4 +
      " pessoas. O que equivale a " +
      porcentagem +
      "% de audiências."
  );
}
