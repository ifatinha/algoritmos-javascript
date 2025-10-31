/** Capitulo 06 - Vetores: Exercicios Propostos 14
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const alunos = [];
const notas1 = [];
const notas2 = [];
let mediaClasse = 0.0;
let qtdAprovados = 0;
let qtdReprovados = 0;
let qtdExame = 0;

for (let i = 0; i < 10; i++) {
    alunos.push("aluno " + (i + 1));
    notas1.push((Math.random() * 10));
    notas2.push((Math.random() * 10));
}

console.clear();
console.log("Relatorio de Notas");
for (let i = 0; i < 10; i++) {
    let media = (notas1[i] + notas2[i]) / 2;
    console.log("Aluno".padEnd(50, ".") + ": " + alunos[i]);
    console.log("Nota 01".padEnd(50, ".") + ": " + notas1[i].toFixed(2));
    console.log("Nota 02".padEnd(50, ".") + ": " + notas2[i].toFixed(2));
    console.log("Média".padEnd(50, ".") + ": " + media.toFixed(2));

    if (media > 7) {
        console.log("Situação".padEnd(50, ".") + ": APROVADO\n");
        qtdAprovados++;
    } else {
        if (media < 2.0) {
            console.log("Situação".padEnd(50, ".") + ": REPROVADO\n");
            qtdReprovados++;
        } else {
            console.log("Situação".padEnd(50, ".") + ": EXAME\n");
            qtdExame++;
        }
    }

    mediaClasse += media;
}

mediaClasse = mediaClasse / 10;
let percAprovados = (qtdAprovados * 100) / 10;
let percReprovados = (qtdReprovados * 100) / 10;
let percExame = (qtdExame * 100) / 10;

console.log();
console.log("Média da Classe".padEnd(50, ".") + ": " + mediaClasse.toFixed(2));
console.log("Percentual de Aprovação".padEnd(50, ".") + ": " + percAprovados + "%");
console.log("Percentual de Reprovação".padEnd(50, ".") + ": " + percReprovados + "%");
console.log("Percentual de Exame".padEnd(50, ".") + ": " + percExame + "%");