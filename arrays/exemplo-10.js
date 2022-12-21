/** Capitulo 06 - Vetores: Exemplo 10
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const gabarito = [];
const alunos = [];
let totalAprovados = 0;

for (let i = 0; i < 10; i++) {
    gabarito.push(scanner.question("Respota da " + (i + 1) + "º pergunta: "));
}

for (let i = 0; i < 10; i++) {

    alunos.push(scanner.questionInt("Matricula do " + (i + 1) + "º aluno: "));
    let pontos = 0;
    const respostas = [];

    for (let j = 0; j < 10; j++) {
        respostas.push(scanner.question("Digite a nota dada pelo aluno " + alunos[i] +
            " à " + (j + 1) + "º pergunta: "));

        if (respostas[j] === gabarito[j]) {
            pontos++;
        }
    }

    console.log("Gabarito.: " + gabarito.join(" - "));
    console.log("Respostas: " + respostas.join(" - "));

    console.log("A nota do aluno " + alunos[i] + " foi de " + pontos + " pontos.");

    if (pontos >= 6) {
        totalAprovados++;
    }
}

let percentualAprovados = (totalAprovados * 100) / 10;

console.log("O percentual de alunos aprovados foi de " + percentualAprovados.toFixed(2) + "%");