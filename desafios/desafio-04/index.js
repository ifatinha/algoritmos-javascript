/** Capitulo 13 - Desafios: Desafio 09
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import agenda from "./util/Agenda.js";

let aniversariantes = [];
let opcao;

do {
    opcao = agenda.menu();
    console.clear();

    switch (opcao) {
        case 1:
            aniversariantes = agenda.cadastrarAniversariante(aniversariantes);
            break;

        case 2:
            aniversariantes = agenda.excluirAniversariante(aniversariantes);
            break;

        case 3:
            aniversariantes = agenda.alterarDados(aniversariantes);
            break;

        case 4:
            agenda.consultarAniversariantesData(aniversariantes);
            break;

        case 5:
            agenda.consultarAniversariantesMes(aniversariantes);
            break;

        case 6:
            agenda.consultarAniversariantesLetra(aniversariantes);
            break;

        case 7:
            agenda.ordenarAgendaNome(aniversariantes);
            break;

        case 8:
            agenda.ordenarAgendaMes(aniversariantes);
            break;

        case 9:
            console.log("Encerrando aplicação!");
            break;

        default:
            console.log("Opção inválida!");
            break;
    }

} while (opcao !== 9)