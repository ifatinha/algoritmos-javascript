/** Capitulo 13 - Desafios: Desafio 21
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import App from "./util/App.js";

let opcao;

do {
  opcao = App.menu();

  switch (opcao) {
    case 1:
      console.clear();
      App.manutencaoProduto();
      break;

    case 2:
      console.clear();
      App.manutencaoClientes();
      break;

    case 3:
      console.clear();
      App.manutencaoVendas();
      break;

    case 4:
      console.clear();
      App.relatorios();
      break;

    case 5:
      console.clear();
      console.log("Encerrando aplicação!");
      break;

    default:
      console.log("Opção inválida!");
      break;
  }
} while (opcao !== 5);
