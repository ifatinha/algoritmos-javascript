/**Faça um programa que receba três notas de um aluno, calcule e mostre a média aritmética e a mensagem
constante na tabela a seguir. Aos alunos que ficaram para exame, calcule e mostre a nota que deverão
tirar para serem aprovados, considerando que a média exigida é 6,0.
MÉDIA aritmética  mensa gem
0,0 - 3,0          Reprovado
3,0 - 7,0          Exame
7,0 - 10,0         Aprovado 
*/

import scanner from "readline-sync";

let nota1 = scanner.questionFloat("Nota 01: ");
let nota2 = scanner.questionFloat("Nota 02: ");
let nota3 = scanner.questionFloat("Nota 03: ");

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7 && media <= 10) {
  console.log("Média: " + media.toFixed(2) + " ----> Situação: Aprovado!");
} else if (media >= 3.0 && media < 7.0) {
  let notaExame = 12 - media;
  console.log("Média: " + media.toFixed(2) + " ----> Situação: Exame!");
  console.log(
    "Aluno precisa tirar nota " + notaExame.toFixed(2) + " no exame."
  );
} else {
  console.log("Média: " + media.toFixed(2) + " ----> Situação: Reprovado!");
}
