/** Capitulo 13 - Desafios: Desafio 12
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import app from './util/App.js';

let funcionarios = [];
let opcao;

do {

    opcao = app.menu();

    switch (opcao) {
        case 1:
            console.clear();
            funcionarios = app.cadastrarFuncionario(funcionarios);
            break;

        case 2:
            console.clear();
            console.log("Funcionarios cadastrados\n");
            app.listarFuncionarios(funcionarios);
            break;

        case 3:
            console.clear();
            app.funcionariosCategoria(funcionarios);
            break;

        case 4:
            console.clear();
            console.log("Encerrando aplicação!");
            break;

        default:
            console.clear();
            console.log("Encerrando aplicação!");
            break;
    }

} while (opcao !== 4)