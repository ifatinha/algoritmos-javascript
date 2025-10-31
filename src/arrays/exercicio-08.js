/** Capitulo 06 - Vetores: Exercicios Propostos 08
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const alunos = [];
const medias = [];
let maiorMedia = 0;
let nomeAluno = "";

for (let i = 0; i < 7; i++) {
    alunos.push(scanner.question("Aluno: "));
    medias.push(Math.floor((Math.random() * 10) + 0));
}

for (let i = 0; i < 7; i++) {
    if (i === 0) {
        maiorMedia = medias[i];
        nomeAluno = alunos[i];
    }

    if (maiorMedia < medias[i]) {
        maiorMedia = medias[i];
        nomeAluno = alunos[i];
    }
}

console.clear();
for (let i = 0; i < 7; i++) {
    if (medias[i] > 6) {
        console.log("Aluno Aprovado: " + alunos[i] + "".padEnd(20, ".") + " - Média Final: " +
            medias[i]+"\n");
    } else {
        console.log("Aluno Reprovado: " + alunos[i] + "".padEnd(20, ".") + " - Média Final: " +
            medias[i]);

        let notaExame = 10 - medias[i];
        console.log("Média Exame: " + notaExame+"\n");
    }
}

console.log("O aluno com maior média foi " + nomeAluno +
    ", com média = " + maiorMedia);