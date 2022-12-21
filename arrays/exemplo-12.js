/** Capitulo 06 - Vetores: Exemplo 12
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const carros = [];
const consumo = [];
let maisEconomico;

for (let i = 0; i < 5; i++) {
    carros.push(scanner.question("Modelo do " + (i + 1) + "º carro:"));
    consumo.push(scanner.questionFloat("Consumo médio por litros: "));

    if (i === 0) {
        maisEconomico = carros[i];
    }
}