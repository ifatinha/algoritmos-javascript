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
            console.log("Funcionários cadstrados");
            gerenciadorFuncionario.listaFuncionarios(funcionarios);
            break;

        case 3:
            console.log("Bônus Mensal dos Funcionários\n");
            gerenciadorFuncionario.mostrarBonusFuncionarios(funcionarios);
            break;

        case 4:
            console.log("Excluir funcionário\n");
            splice();
            break;

        case 5:
            console.log("Alterar salário do funcionário\n");
            break;

        case 6:
            console.log("Encerrando aplicação!");
            break;

        default:
            console.log("Opção Inválida!");
            break;
    }

} while (opcao !== 6);