/** Capitulo 13 - Desafios: Desafio 11
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */


import app from './util/App.js'

let numeros = [];
let opcao;

do {
    opcao = app.menu();

    switch (opcao) {
        case 1:
            numeros = app.addNumero(numeros);
            break;

        case 2:
            console.clear();
            app.listarNumeros(numeros);
            break;

        case 3:
            console.clear();
            app.pesquisarNumero(numeros);
            break;

        case 4:
            console.clear();
            numeros = app.removerNumero(numeros);
            break;

        case 5:
            console.clear();
            numeros = app.deletarVetor(numeros);
            break;

        case 6:
            console.clear();
            console.log("Encerrando aplicação!");
            break;

        default:
            console.clear();
            console.log("Opção inválida! Tente novamente.");
            break;
    }
} while (opcao !== 6)