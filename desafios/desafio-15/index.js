/** Capitulo 13 - Desafios: Desafio 20
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import App from "./util/App.js";

let produtos = [];
let opcao;

do {

    opcao = App.menu();

    switch (opcao) {
        case 1:
            console.clear();
            produtos = App.cadastrarPoduto(produtos);
            break;

        case 2:
            console.clear();
            App.produtosCadastrados(produtos);
            break;

        case 3:
            console.clear();
            produtos = App.atualizarEstoque(produtos);
            break;

        case 4:
            break;

        case 5:
            break;

        case 6:
            console.log("Encerrando aplicação!");
            break;

        default:
            console.log("Opção Inválida!!");
            break;
    }

} while (opcao !== 6)