/** Capitulo 12 - objetos: Exercicio 04
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import gerenciadorMenu from "./util/GerenciadorMenu.js";
import gerenciadorDisciplina from "./util/GerenciadorDisciplina.js";
import gerenciadorAluno from "./util/GerenciadorAluno.js";
import gerenciadorMatricula from "./util/GerenciadorMatricula.js";

let disciplinas = [];
let alunos = [];
let matriculas = [];
let opcao;

do {
    opcao = gerenciadorMenu.menuPrincipal();

    switch (opcao) {
        case 1:
            console.clear();
            disciplinas = gerenciadorDisciplina.cadastrarDisciplina(disciplinas);
            disciplinas.forEach(function (disciplina) {
                disciplina.toString();
            });
            break;

        case 2:
            console.clear();
            alunos = gerenciadorAluno.cadastrarAluno(alunos);
            alunos.forEach(function (aluno) {
                aluno.toString();
            });
            break;

        case 3:
            console.clear();
            matriculas = gerenciadorMatricula.matricularAluno(alunos, disciplinas, matriculas);
            matriculas.forEach(function (matricula) {
                matricula.toString();
            });
            break;

        case 6:
            console.log("Encerrando aplicação!");
            break;

        default:
            console.log("Opção inválida!");
            break;
    }

} while (opcao !== 6);