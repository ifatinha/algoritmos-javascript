/** Capitulo 12 - objetos: Exercicio 01
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import Carro from "./classes/carro.js";
import gerenciador from "./util/gerenciador.js";

let carros = [];
let opcao;

do {
    opcao = gerenciador.menu();

    switch (opcao) {

        case 1:
            carros = gerenciador.cadastrarCarro(carros);
            break;

        case 2:
            console.log("Carros cadastrados: " + carros.length + "\n");
            gerenciador.listarCarros(carros);
            break;

        case 3:
            console.log("Total de Impostos: R$" + gerenciador.totalImpostos(carros));
            break;

        case 4:
            const semImpostos = gerenciador.carrosQueNaoPagamImpostos(carros);
            console.log("Quantidade de carros que não pagam impostos: " + semImpostos.length);
            gerenciador.listarCarros(semImpostos);
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