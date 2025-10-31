/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 07
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let qtdIdade = 0;
let mediaAltura = 0.0;
let qtdAltura = 0.0;
let percPeso = 0.0;

for (let i = 1; i <= 5; i++) {
  let peso = scanner.questionFloat("\nInforme o peso da " + i + "º pessoa: ");
  let altura = scanner.questionFloat("Informe a altura da " + i + "º pessoa: ");
  let idade = scanner.questionInt("Informe a idade da " + i + "º pessoa: ");

  if (idade > 50) {
    qtdIdade++;
  }

  if (idade > 10 && idade < 20) {
    mediaAltura += altura;
    qtdAltura++;
  }

  if (peso < 40) {
    percPeso += peso;
  }
}

console.clear();

if (qtdIdade == 0) {
  console.log("Não foram informadas pessoas com mais de 50 anos.");
} else {
  console.log(
    "A quantidade de pessoas com idade superior a 50 anos foi de " +
      qtdIdade +
      " pessoas."
  );
}

if (qtdAltura === 0) {
  console.log("Não foram informadas pessoas na faixa etaria de 10 a 20 anos.");
} else {
  mediaAltura = mediaAltura / qtdAltura;
  console.log(
    "A média de altura das pessoas na faixa etária de 10 a 20 anos foi de " +
      mediaAltura.toFixed(2) +
      "m."
  );
}

if (percPeso === 0) {
  console.log("Não foram informadas pessoas com peso abaixo de 40kg.");
} else {
  percPeso = (percPeso * 100) / 5;
  console.log(
    "Porcentagem de pessoas com peso abaixo de 40kg: " + percPeso + "%."
  );
}
