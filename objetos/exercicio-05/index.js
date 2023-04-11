import menuPrincipal from "./util/menuPrincipal.js";

let opcao;

do {
    opcao = menuPrincipal.menu();

    switch (opcao) {

        case 1:
            console.log("Cadastrar funcionario\n");
            break;

        case 2:
            console.log("Mostrar bônus mensal dos funcionários\n");
            break;

        case 3:
            console.log("Excluir funcionário\n");
            break;

        case 4:
            console.log("Alterar salário do funcionário\n");
            break;

        case 5:
            console.log("Encerrando aplicação!");
            break;

        default:
            console.log("Opção Inválida!");
            break;
    }

} while (opcao !== 5);