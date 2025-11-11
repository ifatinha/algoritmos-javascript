/** Capitulo 13 - Desafios: Desafio 19
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import App from "./util/App.js";

let pacientes = [];
let agenda = [];
let opcao;

do {
  opcao = App.menu();

  switch (opcao) {
    case 1:
      console.clear();
      pacientes = App.cadastrarPaciente(pacientes);
      break;

    case 2:
      console.clear();
      App.listarPacientes(pacientes);
      break;

    case 3:
      console.clear();
      agenda = App.agendarPaciente(pacientes, agenda);
      break;

    case 4:
      pacientes = App.alterarDadosPaciente(pacientes);
      break;

    case 5:
      App.listarAgenda(agenda);
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
} while (opcao !== 6);
