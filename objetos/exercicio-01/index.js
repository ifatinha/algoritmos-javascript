/** Capitulo 12 - objetos: Exercicio 01
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import negocio from "./util/Negocio.js";

let carros = [];
let opcao;

do {
    opcao = negocio.menu();

    switch (opcao) {

        case 1:
            carros = negocio.cadastrarCarro(carros);
            break;

        case 2:
            console.log("Carros cadastrados: " + carros.length + "\n");
            negocio.listarCarros(carros);
            break;

        case 3:
            console.log("Total de Impostos: R$" + negocio.totalImpostos(carros));
            break;

        case 4:
            const semImpostos = negocio.carrosQueNaoPagamImpostos(carros);
            console.log("Quantidade de carros que não pagam impostos: " + semImpostos.length);
            negocio.listarCarros(semImpostos);
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