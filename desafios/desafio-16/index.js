/** Capitulo 13 - Desafios: Desafio 21
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import App from "./util/App.js";

let opcao;
let produtos = [];
let clientes = [];
let vendas = [];
let itemVendas = [];

do {
    opcao = App.menu();

    switch (opcao) {
        case 1:
            console.clear();
            produtos = App.manutencaoProduto(produtos);
            break;

        case 2:
            console.clear();
            break;

        case 3:
            console.clear();
            break;

        case 4:
            console.clear();
            break;

        case 5:
            console.clear();
            console.log("Encerrando aplicação!");
            break;

        default:
            console.log("Opção inválida!");
            break;
    }

} while (opcao !== 5)