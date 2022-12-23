/** Capitulo 06 - Vetores: Exemplo 12
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const carros = [];
const consumo = [];
let maisEconomico;
let menorConsumo;

for (let i = 0; i < 5; i++) {
    carros.push(scanner.question("Modelo do " + (i + 1) + "º carro: "));
    consumo.push(scanner.questionFloat("Consumo médio por litros: "));

    if (i === 0) {
        maisEconomico = consumo[i];
        menorConsumo = carros[i];
    }

    if (maisEconomico > consumo[i]) {
        maisEconomico = consumo[i];
        menorConsumo = carros[i];
    }
}

console.clear();

console.log("Consumo de cada veículo para percorrer 1000km.");
for (let i = 0; i < 5; i++) {
    let valor = 1000 / consumo[i];
    console.log("O veículo " + carros[i] + " consome " + valor + " litros para percorrer 1000 Km.");
}

console.log("O veículo que menor consumo é o " + menorConsumo + ", que gasta " + maisEconomico + "l/km.");
