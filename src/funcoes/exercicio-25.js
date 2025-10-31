/** Capitulo 08 - sub-rotinas: Exercicio 25
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const alunos = [];
const notas = [];

function lerDados() {
  for (let i = 1; i <= 10; i++) {
    //alunos.push(scanner.questionInt("Matricula do aluno " + i + ": "));
    alunos.push(Math.floor(Math.random() * 1100 + 1000));
    const vet = [];
    for (let i = 1; i <= 4; i++) {
      //vet.push(scanner.questionFloat("Nota " + i + ": "));
      vet.push(Math.floor(Math.random() * 10 + 0));
    }

    notas.push(vet);
  }
}

function mediaAritmetica(notas) {
  let media = 0;

  for (let i = 0; i < 4; i++) {
    media += notas[i];
  }

  media = media / 4;
  return media;
}

function verificarSituacao(media) {
  if (media >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

function mostrarDados() {
  for (let i = 0; i < 10; i++) {
    console.log("Aluno: " + alunos[i]);
    console.log("Notas: " + notas[i].join(", "));
    let media = mediaAritmetica(notas[i]);
    console.log("Média: " + media.toFixed(2));
    console.log("Situação: " + verificarSituacao(media));
    console.log();
  }
}

lerDados();
console.clear();
mostrarDados();
