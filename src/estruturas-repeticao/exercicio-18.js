/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 18
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let resposta;
let qtdPartipantes = 0;
let mediaSalario = 0.0;
let maiorIdade = 0;
let menorIdade = 0;
let qtdMenorSalario = 0;
let idadeMenorSalario = 0;
let sexoMenorSalario = "";
let menorSalario = 0.0;

do {
  console.log("Bem-vindo!!! Informe os dados do participante.");
  let idade = scanner.questionInt("Idade: ");

  let sexo = scanner.question("Sexo (M - Masculino; F - Feminino): ");
  while (sexo !== "F" && sexo !== "f" && sexo !== "M" && sexo !== "m") {
    sexo = scanner.question(
      "Opção Inválida! Sexo (M - Masculino; F - Feminino): "
    );
  }

  let salario = scanner.questionFloat("Salario: ");

  mediaSalario += salario;
  qtdPartipantes++;

  if (qtdPartipantes === 1) {
    maiorIdade = idade;
    menorIdade = idade;
    menorSalario = salario;
  }

  if (maiorIdade < idade) {
    maiorIdade = idade;
  }

  if (menorIdade > idade) {
    menorIdade = idade;
  }

  if (salario < 1500) {
    if (sexo === "F" || sexo === "f") {
      qtdMenorSalario++;
    }
  }

  if (menorSalario >= salario) {
    idadeMenorSalario = idade;
    sexoMenorSalario = sexo;
  }

  resposta = scanner.question(
    "Deseja informar outro participante (S - Sim; N - Não): "
  );
  console.clear();
} while (resposta !== "N" && resposta !== "n");

mediaSalario = mediaSalario / qtdPartipantes;

console.log(
  "A media salarial dos partipantes foi de " + mediaSalario.toFixed(2)
);
console.log(
  "A maior idade entre os participantes foi " + maiorIdade + " anos."
);
console.log(
  "A menor idade entre os participantes foi de " + menorIdade + " anos."
);

if (qtdMenorSalario > 0) {
  console.log(
    "A quantidade de mulheres que recebem menos de R$ 1500.00 foi de " +
      qtdMenorSalario +
      " mulheres."
  );
} else {
  console.log("Nenhuma mulher recebe menos de R$ 1500.00.");
}

console.log(
  "A idade da pessoa que recebe o menor salario é " +
    idadeMenorSalario +
    " anos e ela é do" +
    " sexo " +
    sexoMenorSalario +
    "."
);
