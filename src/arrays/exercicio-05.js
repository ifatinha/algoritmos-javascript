/** Capitulo 06 - Vetores: Exercicios Propostos 05
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const logica = [];
const programacao = [];

for (let i = 0; i < 20; i++) {
  logica.push(Math.floor(Math.random() * 999 + 100));
  programacao.push(Math.floor(Math.random() * 999 + 100));
}

console.log("Alunos Matriculados na disciplina de Logica: ");
console.log(logica.join(" - "));

console.log("\nAlunos Matriculados na disciplina de Programação: ");
console.log(programacao.join(" - "));

const ambas = [];
let existe = false;

for (let i = 0; i < 20; i++) {
  let index = logica.findIndex(function (matricula) {
    return matricula === programacao[i];
  });

  if (index !== -1) {
    ambas.push(programacao[i]);
    existe = true;
  }
}

if (existe === true) {
  console.log("\nAlunos matriculados em ambas as disciplinas: ");
  console.log(ambas.join(" - "));
} else {
  console.log("\nNão existe nenhum aluno matriculado em ambas as disciplinas.");
}
