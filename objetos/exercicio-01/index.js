/** Capitulo 12 - objetos: Exercicio 01
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import Carro from "./classes/carro.js";
import gereciador from "./util/gereciador.js";

let carros = [];
let opcao;

do {
    opcao = gereciador.menu();

    switch (opcao) {

        case 1:
            carros = gereciador.cadastrarCarro(carros);
            break;

        case 2:
            console.log("Carros cadastrados: " + carros.length + "\n");
            gereciador.listarCarros(carros);
            break;

        case 3:
            console.log("Total de Impostos: R$" + gereciador.totalImpostos(carros));
            break;

        case 4:
            console.log("Carros com que não pagam impostos\n");
            const semImpostos = gereciador.carrosQueNaoPagamImpostos(carros);
            gereciador.listarCarros(semImpostos);
            break;

        case 5:
            console.clear();
            console.log("Encerrando aplicação!");
            break;

        default:
            console.clear();
            console.log("Opção Inválida!");
            break;
    }

} while (opcao !== 5);