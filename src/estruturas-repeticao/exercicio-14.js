/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 14
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let mediaIdade = 0;
let qtdOtima = 0;
let qtdBom = 0;
let qtdRegular = 0;
let percOtima = 0.0;
let percBom = 0.0;
let percRegular = 0.0;

for (let i = 1; i <= 20; i++) {
  let idade = scanner.questionInt("Idade do " + i + "º entrevistado: ");
  let classificacao = scanner.questionInt(
    "Classificação do filme (3 - Ótimo; 2 - Bom; 1 - Regular): "
  );

  while (classificacao !== 1 && classificacao !== 2 && classificacao !== 3) {
    classificacao = scanner.questionInt(
      "Opção inválida! Classificação do filme (3 - Ótimo; 2 - Bom; 1 - Regular): "
    );
  }

  if (classificacao === 3) {
    qtdOtima++;
  } else if (classificacao === 2) {
    qtdBom++;
  } else {
    qtdRegular++;
  }

  mediaIdade += idade;
}

percOtima = (qtdOtima * 100) / 20;
percBom = (qtdBom * 100) / 20;
percRegular = (qtdRegular * 100) / 20;

console.clear();

console.log(
  "Média de Idade das Pessoas entrevistadas: " + mediaIdade.toFixed(2)
);
console.log(
  "A quantidade de pessoas que avaliaram o filme como Otimo foi de " +
    qtdOtima +
    " pessoas, o que equivale a " +
    percOtima +
    "%"
);
console.log(
  "A quantidade de pessoas que avaliaram o filme como Bom foi de " +
    qtdBom +
    " pessoas, o que equivale a " +
    percBom +
    "%"
);
console.log(
  "A quantidade de pessoas que avaliaram o filme como Regular foi de " +
    qtdRegular +
    " pessoas, o que equivale a " +
    percRegular +
    "%"
);
