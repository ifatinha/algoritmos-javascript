import gerenciadorFuncionario from "./util/gerenciadorFuncionario.js";
import menuPrincipal from "./util/menuPrincipal.js";

let opcao;
let funcionarios = [];

do {
  opcao = menuPrincipal.menu();

  switch (opcao) {
    case 1:
      console.clear();
      console.log("\nInforme os dados abaixo para cadastrar um funcionário\n");
      funcionarios = gerenciadorFuncionario.cadastrarFuncionario(funcionarios);
      break;

    case 2:
      console.clear();
      gerenciadorFuncionario.listaFuncionarios(funcionarios);
      break;

    case 3:
      console.clear();
      gerenciadorFuncionario.mostrarBonusFuncionarios(funcionarios);
      break;

    case 4:
      console.clear();
      console.log("Excluir funcionário\n");
      funcionarios = gerenciadorFuncionario.removerFuncionario(funcionarios);
      break;

    case 5:
      console.clear();
      console.log("Alterar salário do funcionário\n");
      funcionarios = gerenciadorFuncionario.alterarFuncionario(funcionarios);
      break;

    case 6:
      console.clear();
      console.log("Encerrando aplicação!");
      break;

    default:
      console.log("Opção Inválida!");
      break;
  }
} while (opcao !== 6);
