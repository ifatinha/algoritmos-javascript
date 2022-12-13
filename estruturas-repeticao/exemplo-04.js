/** Capitulo 05 - estruturas de repetição: Exemplo 04
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let maiorIndice = 0;
let menorIndice = 0;
let cidadeMenorIndice = 0;
let cidadeMaiorIndice = 0;
let totalVeiculos = 0;
let totalAcidentes = 0;
let contAcidentes = 0;

for (let i = 1; i <= 5; i++) {
    console.log("Dados da cidade " + i);
    let nomeCidade = scanner.question("Nome da cidade: ");
    let numVeiculos = scanner.questionInt("Quantidade de Veiculos de Passeio: ");
    let acidentesComVitimas = scanner.questionInt("Quantidade de acidentes com vitimas: ");

    if (i === 1) {
        maiorIndice = acidentesComVitimas;
        cidadeMaiorIndice = nomeCidade;
        menorIndice = acidentesComVitimas;
        cidadeMenorIndice = nomeCidade;
    }

    if (acidentesComVitimas > maiorIndice) {
        maiorIndice = acidentesComVitimas;
        cidadeMaiorIndice = nomeCidade;
    }

    if (acidentesComVitimas < menorIndice) {
        menorIndice = acidentesComVitimas;
        cidadeMenorIndice = nomeCidade;
    }

    if (numVeiculos < 2000) {
        totalAcidentes += acidentesComVitimas;
        contAcidentes++;
    }

    totalVeiculos += numVeiculos;
}

console.clear();
let mediaVeiculos = totalVeiculos / 5;
let mediaAcidentes = 0.0;

console.log("A cidade com maior indice de acidentes com vitimas foi a cidade " + cidadeMaiorIndice +
    " com " + maiorIndice + " acidentes.");

console.log("A cidade com menor indice de acidentes com vitimas foi a cidade " + cidadeMenorIndice +
    " com " + menorIndice + " acidentes.");

if (contAcidentes === 0) {
    console.log("Não houve nenhuma cidade com menos de 2000 habitantes.");
} else {
    mediaAcidentes = totalAcidentes / contAcidentes;
}
console.log("TOTAL VEICULOS: " + totalVeiculos);
console.log("MEDIA VEICULOS: " + mediaVeiculos.toFixed(2));
console.log("TOTAL ACIDENTES NAS CIDADES COM MENOS DE 2000 HABITANTES: " + totalAcidentes);
console.log("MEDIA ACIDENTES NAS CIDADES COM MENOS DE 2000 HABITANTES: " + mediaAcidentes.toFixed(2));