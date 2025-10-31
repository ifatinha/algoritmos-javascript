/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 03
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let qtdPrimeira = 0;
let qtdSegunda = 0;
let qtdTerceira = 0;
let qtdQuarta = 0;
let qtdQuinta = 0;

for (let i = 1; i <= 8; i++) {
    let idade = scanner.questionInt("Informe a idade: ");

    if (idade <= 15) {
        qtdPrimeira++;
    } else if (idade > 15 && idade <= 30) {
        qtdSegunda++;
    } else if (idade > 30 && idade <= 45) {
        qtdTerceira++;
    } else if (idade > 45 && idade <= 60) {
        qtdQuarta++;
    } else {
        qtdQuinta++;
    }
}

let percentual1 = (qtdPrimeira * 100) / 8;
let percentual2 = (qtdSegunda * 100) / 8;
let percentual3 = (qtdTerceira * 100) / 8;
let percentual4 = (qtdQuarta * 100) / 8;
let percentual5 = (qtdQuinta * 100) / 8;

console.log("Quantidade de Pessoas na 1º faixa etária: " + qtdPrimeira);
console.log("Quantidade de Pessoas na 2º faixa etária: " + qtdSegunda);
console.log("Quantidade de Pessoas na 3º faixa etária: " + qtdTerceira);
console.log("Quantidade de Pessoas na 4º faixa etária: " + qtdQuarta);
console.log("Quantidade de Pessoas na 5º faixa etária: " + qtdQuinta);

console.log("Percentual de Pessoas na 1º faixa etária: " + percentual1 + "%");
console.log("Percentual de Pessoas na 2º faixa etária: " + percentual2 + "%");
console.log("Percentual de Pessoas na 3º faixa etária: " + percentual3 + "%");
console.log("Percentual de Pessoas na 4º faixa etária: " + percentual4 + "%");
console.log("Percentual de Pessoas na 5º faixa etária: " + percentual5 + "%");
