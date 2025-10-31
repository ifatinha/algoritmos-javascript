/** Capitulo 05 - estruturas de repetição: Exemplo 09
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let totalAprovados = 0;
let totalExame = 0;
let totalReprovados = 0;
let somaMedia = 0.0;

for (let i = 1; i <= 6; i++) {

    console.log("Informe as notas do º" + i + " aluno");
    let nota1 = scanner.questionFloat("Primeira nota: ");
    let nota2 = scanner.questionFloat("Segunda nota: ");

    let media = (nota1 + nota2) / 2;
    somaMedia += media;

    console.log("Média Aritmética: " + media.toFixed(2));

    if (media >= 7) {
        totalAprovados++;
        console.log("Aprovado!");
    } else if (media >= 3 && media < 7) {
        totalExame++
        console.log("Exame!");
    } else {
        totalReprovados++;
        console.log("Reprovado!");
    }
}

let mediaTurma = somaMedia / 6;
console.clear();
console.log("Média da Turma".padEnd(50, ".") + ": " + mediaTurma.toFixed(2));
console.log("Total Aprovados".padEnd(50, ".") + ": " + totalAprovados);
console.log("Total Exame".padEnd(50, ".") + ": " + totalExame);
console.log("Total Reprovados".padEnd(50, ".") + ": " + totalReprovados);