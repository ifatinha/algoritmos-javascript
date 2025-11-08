/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 09
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";
let mediaIdades = 0.0;
let qtd1 = 0;
let porcentagem;

for (let i = 1; i <= 10; i++) {
  console.log("Dados da " + i + "º pessoa");
  let idade = scanner.questionInt("Idade: ");
  let peso = scanner.questionFloat("Peso: ");
  let altura = scanner.questionFloat("Altura: ");

  mediaIdades += idade;

  if (peso > 90 && altura > 1.5) {
    qtd1++;
  }

  if (idade > 10 && idade < 30 && altura > 1.9) {
    porcentagem++;
  }
}

mediaIdades = mediaIdades / 10;
console.log(
  "A média das idades das 10 pessoas informadas foram de " +
    mediaIdades.toFixed(2) +
    " anos."
);

if (qtd1 > 0) {
  console.log(
    "A quantidade de pessoas com mais de 90kg e que tem menos de 1.5m de altura foi de " +
      qtd1 +
      " pessoas."
  );
} else {
  console.log(
    "Não foram informadas nenhuma pessoa com mais de 90kg e que tenha menos de 1.5m de altura."
  );
}

if (porcentagem > 0) {
  porcentagem = (porcentagem * 100) / 10;
  console.log(
    "A porcentagem de pessoas na faixa de 10 e 30 anos com mais de 1.9m de altura foi de " +
      porcentagem +
      "%."
  );
} else {
  console.log(
    "Não foram informadas pessoas na faixa etaria de 10 e 30 anos com mais de 1.9m de altura."
  );
}
