/**A nota final de um estudante é calculada a partir de três notas atribuídas, respectivamente, a um trabalho de laboratório, a uma avaliação semestral e a um exame final. A média das três notas mencionadas
obedece aos pesos a seguir:
Nota                    PESO
Trabalho de laboratório  2
Avaliação semestral      3
Exame final              5
Faça um programa que receba as três notas, calcule e mostre a média ponderada e o conceito que segue
a tabela: 
MÉDIA PONDERADA CONCEITO
8,0     10,0      A
7,0     8,0       B
6,0     7,0       C
5,0     6,0       D
0,0     5,0       E
*/

import scanner from "readline-sync";

let trabalho = scanner.questionFloat("Nota Trabalho de Laboratório: ");
let avaliacao = scanner.questionFloat("Nota da Avaliação Semestral: ");
let exame = scanner.questionFloat("Nota do Exame Final: ");

let media = (trabalho * 2 + avaliacao * 3 + exame * 5) / (2 + 3 + 5);
let conceito = "";

if (media >= 8.0 && media <= 10) {
  conceito = "A";
} else if (media >= 7.0 && media < 8.0) {
  conceito = "B";
} else if (media >= 6.0 && media < 7.0) {
  conceito = "C";
} else if (media >= 5.0 && media < 6.0) {
  conceito = "D";
} else {
  conceito = "E";
}

console.log("Média ponderada".padEnd(20, ".") + ": " + media.toFixed(2));
console.log("Conceito".padEnd(20, ".") + ": " + conceito);
