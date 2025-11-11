/** Capitulo 06 - Vetores: Exercicios Propostos 13
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const alunos = [];
const notas = [];

for (let i = 0; i < 10; i++) {
  alunos.push(scanner.question("Digite o nome do " + i + "º aluno: "));
  notas.push(Math.floor(Math.random() * 10 + 1));
}

let media = notas.reduce(function (total, nota) {
  return total + nota;
});

media = media / 10;

console.clear();
console.log("Aluno".padEnd(50, " ") + "Nota");
for (let i = 0; i < 10; i++) {
  console.log(alunos[i].padEnd(50, ".") + " " + notas[i]);
}

console.log("\nMédia da classe".padEnd(50, ".") + media.toFixed(2));
