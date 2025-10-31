/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 13
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let faixaEtaria1 = 0;
let faixaEtaria2 = 0;
let faixaEtaria3 = 0;
let faixaEtaria4 = 0;
let media1 = 0.0;
let media2 = 0.0;
let media3 = 0.0;
let media4 = 0.0;

for (let i = 1; i <= 10; i++) {
  console.log("Dados da " + i + "º pessoa.");
  let idade = scanner.questionInt("Idade: ");
  let peso = scanner.questionFloat("Peso: ");

  if (idade >= 1 && idade <= 10) {
    faixaEtaria1++;
    media1 += peso;
  } else if (idade >= 11 && idade <= 20) {
    faixaEtaria2++;
    media2 += peso;
  } else if (idade >= 21 && idade <= 30) {
    faixaEtaria3++;
    media3 += peso;
  } else {
    faixaEtaria4++;
    media4 += peso;
  }
}

if (faixaEtaria1 > 0) {
  media1 = media1 / faixaEtaria1;
  console.log(
    "Média de peso das pessoas das pessoas com idade entre 01 e 10 anos: " +
      media1.toFixed(2)
  );
} else {
  console.log("Não foi informada nenhuma pessoa com idade entre 01 e 10 anos.");
}

if (faixaEtaria2 > 0) {
  media2 = media2 / faixaEtaria2;
  console.log(
    "Média de peso das pessoas das pessoas com idade entre 11 e 20 anos: " +
      media2.toFixed(2)
  );
} else {
  console.log("Não foi informada nenhuma pessoa com idade entre 11 e 20 anos.");
}

if (faixaEtaria3 > 0) {
  media3 = media3 / faixaEtaria3;
  console.log(
    "Média de peso das pessoas das pessoas com idade entre 21 e 30 anos: " +
      media3.toFixed(2)
  );
} else {
  console.log("Não foi informada nenhuma pessoa com idade entre 21 e 30 anos.");
}

if (faixaEtaria4 > 0) {
  media4 = media4 / faixaEtaria4;
  console.log(
    "Média de peso das pessoas das pessoas com idade acima de 30 anos: " +
      media4.toFixed(2)
  );
} else {
  console.log("Não foi informada nenhuma pessoa com idade acima 30 anos.");
}
